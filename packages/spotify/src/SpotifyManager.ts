import fetch from "node-fetch";

import { SpotifyAlbumLoader } from "./item/SpotifyAlbumLoader";
import { SpotifyPlaylistLoader } from "./item/SpotifyPlaylistLoader";
import { SpotifyTrackLoader } from "./item/SpotifyTrackLoader";

import type { Dictionary, Manager } from "lavaclient";
import type { SpotifyItemType } from "./abstract/SpotifyItem";
import type { Item, Loader } from "./abstract/Loader";

export class SpotifyManager {
  static readonly BASE_URL = "https://api.spotify.com/v1";

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
    this.loaders = [ new SpotifyAlbumLoader(), new SpotifyPlaylistLoader(), new SpotifyTrackLoader() ]
      .filter(l => !options.disabledItems?.includes(l.itemType) ?? true);

    this.#clientId = options.clientId;
    this.#clientSecret = options.clientSecret;
  }

  /**
   * The authorization used for tokens.
   * @private
   */
  private get encoded(): string {
    return Buffer.from(`${this.#clientId}:${this.#clientSecret}`).toString("base64");
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

    return fetch(`${prefixBaseUrl ? SpotifyManager.BASE_URL : ""}${endpoint}`, { headers })
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
        case "album":
        case "playlist":
          for (const track of item.tracks) {
            await track.resolveLavalinkTrack();
          }

          break;
        case "track":
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
    } = await fetch("https://accounts.spotify.com/api/token?grant_type=client_credentials", {
      method: "post",
      headers: {
        authorization: `Basic ${this.encoded}`,
        "content-type": "application/x-www-form-urlencoded",
      },
    })
      .then(r => r.json());

    if (!access_token) {
      throw new Error("Invalid spotify client id.");
    }

    this.#token = access_token;
    setTimeout(this.renew.bind(this), expires_in * 1000);
  }

}

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
}
