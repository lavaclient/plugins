import { Pool, Dispatcher, fetch } from "undici";

import { SpotifyItemType } from "./abstract/SpotifyItem";

/* different loaders. */
import { SpotifyAlbumLoader } from "./item/SpotifyAlbumLoader";
import { SpotifyPlaylistLoader } from "./item/SpotifyPlaylistLoader";
import { SpotifyTrackLoader } from "./item/SpotifyTrackLoader";
import { SpotifyArtistLoader } from "./item/SpotifyArtistLoader";

import type { Dictionary, Manager as LavaclientManager } from "lavaclient";
import type { Item, Loader } from "./abstract/Loader";
import type { PageLoadingStrategy } from "./PageLoader";

export class SpotifyManager {
    static readonly API_URL = "https://api.spotify.com";

    /**
     * Loads at the maximum 10, 100-track pages, sequentially.
     */
    static readonly DEFAULT_PAGE_STRATEGY: PageLoadingStrategy = {
        type: "sequential",
        size: 100,
        limit: 10
    };

    static readonly SOURCE_PREFIX = {
        youtube: "ytsearch:",
        "youtube music": "ytmsearch:",
        soundcloud: "scsearch:",
    };

    static readonly DEFAULTS: Omit<SpotifyManagerOptions, "client"> = {
        autoResolveYoutubeTracks: false,
        pages: {
            album: SpotifyManager.DEFAULT_PAGE_STRATEGY,
            playlist: SpotifyManager.DEFAULT_PAGE_STRATEGY
        },
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
     * The HTTP dispatcher for this spotify manager.
     */
    readonly dispatcher: Dispatcher;

    /**
     * The lavaclient manager.
     */
    readonly manager: LavaclientManager;

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
    constructor(
        lavaclient: LavaclientManager,
        options: SpotifyManagerOptions
    ) {
        this.manager = lavaclient;

        this.dispatcher = new Pool(SpotifyManager.API_URL);

        // TODO: use deep required
        this.options = Object.assign(
            SpotifyManager.DEFAULTS,
            options
        ) as Required<SpotifyManagerOptions>;

        this.loaders = [
            new SpotifyAlbumLoader(this.options.pages.album!),
            new SpotifyPlaylistLoader(this.options.pages.playlist!),
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
        const matchers = this.loaders.reduce<RegExp[]>(
            (rs, loader) => [...rs, ...loader.matchers],
            []
        );

        return matchers.some(r => r.test(url));
    }

    /**
     * Makes a request to the spotify api.
     * @param endpoint If prefixing with the base url, the endpoint. Or full URL.
     */
    async makeRequest<T extends Dictionary = Dictionary>(endpoint: string): Promise<T> {
        if (!this.#token) {
            await this.renew();
        }

        const response = await this.dispatcher.request({
            path: `/v1/${endpoint.replace(/^\//, "")}`,
            method: "GET",
            headers: { "Authorization": `Bearer ${this.token}` }
        });

        return response.body.json();
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
        const response = await fetch(
            "https://accounts.spotify.com/api/token?grant_type=client_credentials",
            {
                method: "POST",
                headers: {
                    authorization: `Basic ${this.encoded}`,
                    "content-type": "application/x-www-form-urlencoded",
                }
            }
        );

        const token = await response.json() as OauthToken;
        if (!token.access_token) {
            throw new Error("Invalid spotify client id.");
        }

        this.#token = token.access_token;
        setTimeout(() => void this.renew(), token.expires_in * 1000);
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
    pages?: {
        album?: PageLoadingStrategy;
        playlist?: PageLoadingStrategy
    };
    client: SpotifyClientOptions;
    loaders?: SpotifyItemType[];
    autoResolveYoutubeTracks?: boolean;
    searchPrefix?: SearchPrefix;
    searchFormat?: string;
    market?: string;
}

interface OauthToken {
    access_token: string;
    expires_in: number;
    token_type: string;
    error?: string;
}
