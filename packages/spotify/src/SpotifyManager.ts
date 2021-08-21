import fetch from "centra";

import { SpotifyItemType } from "./abstract/SpotifyItem";

/* different loaders. */
import { SpotifyAlbumLoader } from "./item/SpotifyAlbumLoader";
import { SpotifyPlaylistLoader } from "./item/SpotifyPlaylistLoader";
import { SpotifyTrackLoader } from "./item/SpotifyTrackLoader";
import { SpotifyArtistLoader } from "./item/SpotifyArtistLoader";

import type { Cluster, Dictionary, Node } from "lavaclient";
import type { Item, Loader } from "./abstract/Loader";

export class SpotifyManager {
    static readonly API_URL = "https://api.spotify.com/v1";

    static readonly SOURCE_PREFIX = {
        youtube: "ytsearch:",
        "youtube music": "ytmsearch:",
        soundcloud: "scsearch:",
    };

    static readonly DEFAULTS: Omit<SpotifyManagerOptions, "client"> = {
        albumPageLimit: -1,
        playlistPageLimit: -1,
        autoResolveYoutubeTracks: false,
        loaders: [
            SpotifyItemType.Album,
            SpotifyItemType.Artist,
            SpotifyItemType.Track,
            SpotifyItemType.Playlist,
        ],
        market: "US",
        searchFormat: "{track} {artist}",
        searchPrefix: "youtube",
    };

    /**
     * The lavaclient manager.
     */
    readonly lavaclient: Cluster | Node;

    /**
     * The options provided to the spotify manager.
     */
    readonly options: Required<SpotifyManagerOptions>;

    /**
     * The enabled loaders.
     */
    loaders: Loader[];

    /**
     * The source used for resolving lavalink tracks.
     */
    searchPrefix: string;

    /**
     * The token to use.
     * @private
     */
    #token: string | null = null;

    /**
     * The client id.
     * @private
     */
    readonly #client: SpotifyClientOptions;

    /**
     * @param lavaclient The lavaclient manager.
     * @param options The options for this spotify manager.
     */
    constructor(lavaclient: Node | Cluster, options: SpotifyManagerOptions) {
        this.lavaclient = lavaclient;
        this.options = Object.assign(
            SpotifyManager.DEFAULTS,
            options
        ) as Required<SpotifyManagerOptions>;

        this.loaders = [
            new SpotifyAlbumLoader(),
            new SpotifyPlaylistLoader(),
            new SpotifyTrackLoader(),
            new SpotifyArtistLoader(),
        ].filter(l => this.options.loaders.includes(l.itemType) ?? false);

        this.searchPrefix =
            SpotifyManager.SOURCE_PREFIX[options.searchPrefix ?? "youtube"];
        this.#client = options.client;
    }

    /**
     * The current access token.
     */
    get token(): string | null {
        return this.#token;
    }

    /**
     * The authorization used for tokens.
     * @private
     */
    private get encoded(): string {
        return Buffer.from(
            `${this.#client.id}:${this.#client.secret}`
        ).toString("base64");
    }

    /**
     * Determine whether a URL is a spotify url.
     * @param url The url to test.
     */
    isSpotifyUrl(url: string): boolean {
        const matchers = this.loaders.reduce(
            (rs, loader) => [...rs, ...loader.matchers],
            [] as RegExp[]
        );
        return matchers.some(r => r.test(url));
    }

    /**
     * Makes a request to the spotify api.
     * @param endpoint If prefixing with the base url, the endpoint. Or full URL.
     * @param prefixBaseUrl Whether to prefix the endpoint with the api base url.
     */
    async makeRequest<T extends Dictionary = Dictionary>(
        endpoint: string,
        prefixBaseUrl = true
    ): Promise<T> {
        if (!this.#token) {
            await this.renew();
        }

        return fetch(
            `${prefixBaseUrl ? SpotifyManager.API_URL : ""}${endpoint}`
        )
            .header("Authorization", `Bearer ${this.token}`)
            .send()
            .then(r => r.json());
    }

    /**
     * Loads a spotify resource with the provided url.
     *
     * @param url The playlist, track, or album url to load.
     * @returns The loaded spotify resource.
     */
    async load(url: string): Promise<Item | null> {
        if (!this.isSpotifyUrl(url)) {
            return null;
        }

        const loader = this.loaders.find(l =>
            l.matchers.some(r => r.test(url))
        );
        if (!loader) {
            return null;
        }

        const item = await loader.load(this, loader.match(url)!);
        if (!item) {
            return null;
        }

        if (this.options.autoResolveYoutubeTracks) {
            switch (item.type) {
                case SpotifyItemType.Album:
                case SpotifyItemType.Artist:
                case SpotifyItemType.Playlist:
                    await item.resolveYoutubeTracks();
                    break;
                case SpotifyItemType.Track:
                    await item.resolveYoutubeTrack();
                    break;
            }
        }

        return item;
    }

    /**
     * Requests the spotify token and schedules to renew it.
     * @returns {Promise<void>}
     */
    async renew() {
        const { expires_in, access_token } = await fetch(
            "https://accounts.spotify.com/api/token?grant_type=client_credentials",
            "POST"
        )
            .header({
                authorization: `Basic ${this.encoded}`,
                "content-type": "application/x-www-form-urlencoded",
            })
            .send()
            .then(r => r.json());

        if (!access_token) {
            throw new Error("Invalid spotify client id.");
        }

        this.#token = access_token;
        setTimeout(this.renew.bind(this), expires_in * 1000);
    }
}

export type SearchPrefix = "youtube" | "youtube music" | "soundcloud";

export interface SpotifyClientOptions {
    /**
     * The client id to use for authorization.
     */
    id: string;

    /**
     * The client secret to use for authorization.
     */
    secret: string;
}

export interface SpotifyManagerOptions {
    playlistPageLimit?: number;
    albumPageLimit?: number;
    client: SpotifyClientOptions;
    loaders?: SpotifyItemType[];
    autoResolveYoutubeTracks?: boolean;
    searchPrefix?: SearchPrefix;
    searchFormat?: string;
    market?: string;
}
