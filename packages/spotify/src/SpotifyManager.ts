import fetch from "petitio";

import { SpotifyItemType } from "./abstract/SpotifyItem";

/* different loaders. */
import { SpotifyAlbumLoader } from "./item/SpotifyAlbumLoader";
import { SpotifyPlaylistLoader } from "./item/SpotifyPlaylistLoader";
import { SpotifyTrackLoader } from "./item/SpotifyTrackLoader";
import { SpotifyArtistLoader } from "./item/SpotifyArtistLoader";

import type { Dictionary, Manager } from "lavaclient";
import type { Item, Loader } from "./abstract/Loader";

export class SpotifyManager {
    static readonly BASE_URL = "https://api.spotify.com/v1";
    static readonly SOURCE_PREFIX = {
        "youtube": "ytsearch:",
        "youtube music": "ytmsearch:",
        "soundcloud": "scsearch:",
    };

    /**
     * The lavaclient manager.
     */
    readonly lavaclient: Manager;

    /**
     * The options provided to the spotify manager.
     */
    readonly options: SpotifyManagerOptions;

    /**
     * The enabled loaders.
     */
    loaders: Loader[];

    /**
     * Whether to automatically resolve track youtube videos
     */
    autoResolveYoutubeVideos: boolean;

    /**
     * Total numbers of pages to load, each page having 100 tracks.
     */
    playlistLimit: number;

    /**
     * Total number of pages to load, each page having 50 tracks.
     */
    albumLimit: number;

    /**
     * The source used for resolving lavalink tracks.
     */
    searchPrefix: string;

    /**
     * The search format used when resolving lavalink tracks.
     * @type {string}
     */
    searchFormat: string;

    /**
     * The market to use.
     */
    market: string;

    /**
     * The token to use.
     * @private
     */
    #token: string | null = null;

    /**
     * The client id.
     * @private
     */
    readonly #clientId: string;

    /**
     * The client secret.
     * @private
     */
    readonly #clientSecret: string;

    /**
     * @param lavaclient The lavaclient manager.
     * @param options The options for this spotify manager.
     */
    public constructor(lavaclient: Manager, options: SpotifyManagerOptions) {
        this.lavaclient = lavaclient;
        this.options = options;

        this.autoResolveYoutubeVideos = options.autoResolveYoutubeVideos ?? true;
        this.albumLimit = options.albumLimit ?? 1;
        this.playlistLimit = options.playlistLimit ?? 1;
        this.loaders = [ new SpotifyAlbumLoader(), new SpotifyPlaylistLoader(), new SpotifyTrackLoader(), new SpotifyArtistLoader() ]
            .filter(l => !options.disabledItems?.includes(l.itemType) ?? true);
        this.searchPrefix = SpotifyManager.SOURCE_PREFIX[options.searchPrefix ?? "youtube"];
        this.searchFormat = options.searchFormat ?? "{artist} {track}";
        this.market = options.market?.toUpperCase() ?? "US";

        this.#clientId = options.clientId;
        this.#clientSecret = options.clientSecret;
    }

    /**
     * The client id provided.
     */
    get clientId(): string {
        return this.#clientId;
    }

    /**
     * The client secret provided.
     */
    get clientSecret(): string {
        return this.#clientSecret;
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
        return Buffer.from(`${this.#clientId}:${this.#clientSecret}`).toString("base64");
    }

    /**
     * Determine whether a URL is a spotify url.
     * @param url The url to test.
     */
    isSpotifyUrl(url: string): boolean {
        const matchers = this.loaders.reduce((rs, loader) => [ ...rs, ...loader.matchers ], [] as RegExp[]);
        return matchers.some(r => r.test(url));
    }

    /**
     * Makes a request to the spotify api.
     * @param endpoint If prefixing with the base url, the endpoint. Or full URL.
     * @param prefixBaseUrl Whether to prefix the endpoint with the api base url.
     */
    async makeRequest<T extends Dictionary = Dictionary>(endpoint: string, prefixBaseUrl = true): Promise<T> {
        if (!this.#token) {
            await this.renew();
        }

        const headers = {
            authorization: `Bearer ${this.token}`,
        };

        return fetch(`${prefixBaseUrl ? SpotifyManager.BASE_URL : ""}${endpoint}`)
            .header(headers)
            .json();
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

        const loader = this.loaders.find(l => l.matchers.some(r => r.test(url)));
        if (!loader) {
            return null;
        }

        const item = await loader.load(this, loader.match(url)!);
        if (!item) {
            return null;
        }

        if (this.autoResolveYoutubeVideos) {
            switch (item.type) {
                case SpotifyItemType.Album:
                case SpotifyItemType.Artist:
                case SpotifyItemType.Playlist:
                    await item.resolveAllTracks();
                    break;
                case SpotifyItemType.Track:
                    await item.resolveLavalinkTrack();
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
        const {
            expires_in,
            access_token,
        } = await fetch("https://accounts.spotify.com/api/token?grant_type=client_credentials", "POST")
            .header({ authorization: `Basic ${this.encoded}`, "content-type": "application/x-www-form-urlencoded" })
            .json();

        if (!access_token) {
            throw new Error("Invalid spotify client id.");
        }

        this.#token = access_token;
        setTimeout(this.renew.bind(this), expires_in * 1000);
    }

}

export type SearchPrefix = "youtube" | "youtube music" | "soundcloud"

export interface SpotifyManagerOptions {
    /**
     * Total numbers of pages to load, each page having 100 tracks.
     */
    playlistLimit?: number;

    /**
     * Total number of pages to load, each page having 50 tracks.
     */
    albumLimit?: number;

    /**
     * The types of spotify items that will be loaded.
     */
    disabledItems?: SpotifyItemType[];

    /**
     * The client id to use for authorization.
     */
    clientId: string;

    /**
     * The client secret to use for authorization.
     */
    clientSecret: string;

    /**
     * Whether to automatically fetch the youtube video for spotify tracks.
     */
    autoResolveYoutubeVideos?: boolean;

    /**
     * The search prefix used for resolving lavalink tracks, defaults to "youtube".
     */
    searchPrefix?: SearchPrefix;

    /**
     * The search format used when resolving lavalink tracks, defaults to "{artist} {track name}"
     * Available keys:
     * - {artist} Artist Name
     * - {track} Track Name
     */
    searchFormat?: string;

    /**
     * The market to use, must be a ISO 3166-1 alpha-2 country code.
     *
     * @see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
     */
    market?: string;
}
