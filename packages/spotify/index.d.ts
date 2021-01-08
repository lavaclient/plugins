import type * as Lavalink from "@lavaclient/types";
import type { Dictionary, Manager, Plugin } from "lavaclient";

export namespace Spotify {
  interface PagingObject<T> {
    href: string;
    items: T[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string;
    total: number;
  }

  interface ExternalIdObject {
    isrc?: string;
    ean?: string;
    upc?: string;
  }

  interface ExternalUrlObject {
    spotify: string;
  }

  interface ContextObject {
    type: "artist" | "playlist" | "album" | "show" | "episode";
    href: string;
    external_urls: ExternalUrlObject;
    uri: string;
  }

  interface ImageObject {
    height?: number;
    url: string;
    width?: number;
  }

  interface FollowersObject {
    href: null;
    total: number;
  }

  interface RestrictionsObject {
    reason: string;
  }

  interface Album extends ContextObject {
    album_group?: "album" | "single" | "compilation" | "appears_on";
    album_type: "album" | "single" | "compilation";
    artists: Artist[];
    available_markets?: string[];
    id: string;
    images: ImageObject[];
    name: string;
    release_date: string;
    release_date_precision: "year" | "month" | "day";
    restrictions?: RestrictionsObject;
    type: "album";
    copyrights: CopyrightObject[];
    external_ids: ExternalIdObject;
    genres: string[];
    label: string;
    popularity: number;
    tracks: PagingObject<Track>;
  }

  interface CopyrightObject {
    text: string;
    type: "C" | "P";
  }

  interface Artist extends ContextObject {
    name: string;
    id: string;
    type: "artist";
    followers: FollowersObject;
    genres: string[];
    images: ImageObject[];
    popularity: number;
  }

  interface Playlist extends ContextObject {
    collaborative: boolean;
    description: string | null;
    id: string;
    images: ImageObject[];
    name: string;
    owner: User;
    public: boolean | null;
    snapshot_id: string;
    type: "playlist";
    followers: FollowersObject;
    tracks: PagingObject<PlaylistTracks>;
  }

  interface PlaylistTracks {
    added_at: string;
    added_by: User;
    is_local: boolean;
    track: Track;
  }

  interface User {
    display_name?: string;
    external_urls: ExternalUrlObject;
    followers?: FollowersObject;
    href: string;
    id: string;
    images?: ImageObject[];
    type: "user";
    uri: string;
  }

  interface Track {
    artists: Artist[];
    available_markets?: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrlObject;
    href: string;
    id: string;
    is_playable?: boolean;
    linked_from?: TrackLinkObject;
    restrictions?: RestrictionsObject;
    name: string;
    preview_url: string | null;
    track_number: number;
    type: "track";
    uri: string;
    album: Album;
    external_ids: ExternalIdObject;
    popularity: number;
    is_local?: boolean;
  }

  interface TrackLinkObject {
    external_urls: ExternalUrlObject;
    href: string;
    id: string;
    type: "track";
    uri: string;
  }
}

export abstract class Loader {
  /**
   * The item type this loads.
   */
  abstract itemType: SpotifyItemType;
  /**
   * The regex(es) used for matching urls.
   */
  abstract matchers: RegExp[];

  /**
   * Used for loading spotify items.
   * @returns A spotify item (album, playlist, or track)
   */
  abstract load(manager: SpotifyManager, execArray: RegExpExecArray): Promise<Item>;

  /**
   * Used for finding this loader.
   * @param identifier The identifier to test.
   */
  match(identifier: string): RegExpExecArray | null;
}

export type Item = SpotifyTrack | SpotifyAlbum | SpotifyPlaylist;

export abstract class SpotifyItem {
  /**
   * The spotify manager.
   */
  readonly manager: SpotifyManager;
  /**
   * The type of spotify item this is.
   */
  abstract type: SpotifyItemType;

  /**
   * @param manager The spotify manager.
   */
  protected constructor(manager: SpotifyManager);
}

export type SpotifyItemType = "album" | "playlist" | "track";

export class SpotifyPlaylist extends SpotifyItem {
  readonly type: "playlist";
  /**
   * The playlist data.
   */
  readonly data: Spotify.Playlist;
  /**
   * The spotify tracks of this playlist.
   * @private
   */
  readonly tracks: SpotifyTrack[];

  /**
   * @param manager The spotify manager.
   * @param album
   * @param tracks
   */
  constructor(manager: SpotifyManager, album: Spotify.Playlist, tracks: Array<SpotifyTrack>);

  /**
   * The name of this track.
   */
  get name(): string;

  /**
   * The owner of this playlist.
   */
  get owner(): Spotify.User;

  /**
   * The artwork for this playlist.
   */
  get artwork(): string;
}

export class SpotifyAlbum extends SpotifyItem {
  readonly type: "album";
  /**
   * The album data.
   */
  data: Spotify.Album;
  /**
   * The spotify tracks of this album.
   * @private
   */
  readonly tracks: SpotifyTrack[];

  /**
   * @param manager The spotify manager.
   * @param album
   * @param tracks
   */
  constructor(manager: SpotifyManager, album: Spotify.Album, tracks: Array<SpotifyTrack>);

  /**
   * Converts raw tracks into SpotifyTracks
   * @param manager
   * @param tracks
   */
  static convertTracks(manager: SpotifyManager, tracks: Spotify.Track[]): SpotifyTrack[];

  /**
   * The name of this track.
   */
  get name(): string;

  /**
   * The artists that made this track.
   */
  get artists(): Spotify.Artist[];

  /**
   * The artwork for this track.
   */
  get artwork(): string | null;
}

export class SpotifyTrack extends SpotifyItem {
  type: "track";
  /**
   * The spotify track data.
   */
  data: Spotify.Track;

  /**
   * @param manager The spotify manager.
   * @param track The spotify track data.
   */
  constructor(manager: SpotifyManager, track: Spotify.Track);

  /**
   * The name of this track.
   */
  get name(): string;

  /**
   * The artists that made this track.
   */
  get artists(): Spotify.Artist[];

  /**
   * The album data for this track.
   */
  get album(): Spotify.Album;

  /**
   * The artwork for this track.
   * @returns {string}
   */
  get artwork(): string;

  /**
   * Resolves the lavalink track.
   */
  resolveLavalinkTrack(): Promise<Lavalink.Track>;
}

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
   * @param lavaclient The lavaclient manager.
   * @param options The options for this spotify manager.
   */
  constructor(lavaclient: Manager, options: SpotifyManagerOptions);

  /**
   * The client id provided.
   */
  get clientId(): string;

  /**
   * The client secret provided.
   */
  get clientSecret(): string;

  /**
   * The current access token.
   */
  get token(): string | null;

  /**
   * Determine whether a URL is a spotify url.
   * @param url The url to test.
   */
  isSpotifyUrl(url: string): boolean;

  /**
   * Makes a request to the spotify api.
   * @param endpoint If prefixing with the base url, the endpoint. Or full URL.
   * @param prefixBaseUrl Whether to prefix the endpoint with the api base url.
   */
  makeRequest<T extends Dictionary = Dictionary>(endpoint: string, prefixBaseUrl?: boolean): Promise<T>;

  /**
   * Loads a spotify resource with the provided url.
   *
   * @param url The playlist, track, or album url to load.
   * @returns The loaded spotify resource.
   */
  load(url: string): Promise<Item | null>;

  /**
   * Requests the spotify token and schedules to renew it.
   * @returns {Promise<void>}
   */
  renew(): Promise<void>;
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

export class SpotifyPlugin extends Plugin {
  /**
   * The spotify manager options.
   */
  readonly options: SpotifyManagerOptions;
  /**
   * The spotify manager.
   */
  spotify: SpotifyManager;

  /**
   * @param options The spotify manager options.
   */
  constructor(options: SpotifyManagerOptions);

  /**
   * Searches spotify.
   * @param url The URL to search for.
   */
  search(url: string): Promise<SpotifyItem | null>;

  /**
   * Called whenever this plugin gets loaded.
   */
  load(manager: Manager): Promise<void>;
}

declare module "lavaclient" {
  interface Manager {
    spotify: SpotifyManager;
  }
}

