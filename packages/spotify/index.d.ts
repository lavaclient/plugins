import type * as Lavalink from "@lavaclient/types";
import type { Manager, Dictionary, Plugin } from "lavaclient";

declare module "lavaclient" {
    interface Manager {
        readonly spotify: SpotifyManager;
    }
}

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
        type: "artist" | "playlist" | "album" | "track" | "show" | "episode";
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
    abstract itemType: SpotifyItemType;
    abstract matchers: RegExp[];

    abstract load(manager: SpotifyManager, execArray: RegExpExecArray): Promise<Item>;

    match(identifier: string): RegExpExecArray | null;
}

export type Item = SpotifyTrack | SpotifyAlbum | SpotifyPlaylist | SpotifyArtist;

export abstract class SpotifyItem {
    readonly manager: SpotifyManager;
    abstract type: SpotifyItemType;

    protected constructor(manager: SpotifyManager);
}

export enum SpotifyItemType {
    Artist = 0,
    Playlist = 1,
    Track = 2,
    Album = 3
}

export class SpotifyPlaylist extends SpotifyItem {
    readonly type: SpotifyItemType.Playlist;
    readonly data: Spotify.Playlist;
    readonly tracks: SpotifyTrack[];

    constructor(manager: SpotifyManager, album: Spotify.Playlist, tracks: Array<SpotifyTrack>);

    get name(): string;

    get owner(): Spotify.User;

    get artwork(): string;

    resolveAllTracks(): Promise<Lavalink.Track[]>;
}

export class SpotifyAlbum extends SpotifyItem {
    readonly type: SpotifyItemType.Album;
    data: Spotify.Album;
    readonly tracks: SpotifyTrack[];

    constructor(manager: SpotifyManager, album: Spotify.Album, tracks: Array<SpotifyTrack>);

    get name(): string;

    get artists(): Spotify.Artist[];

    get artwork(): string | null;

    static convertTracks(manager: SpotifyManager, tracks: Spotify.Track[]): SpotifyTrack[];

    resolveAllTracks(): Promise<Lavalink.Track[]>;
}

export class SpotifyArtist extends SpotifyItem {
    type: SpotifyItemType.Artist;
    readonly data: Spotify.Artist;
    readonly topTracks: SpotifyTrack[];

    constructor(manager: SpotifyManager, data: Spotify.Artist, topTracks: Spotify.Track[]);

    get name(): string;

    get artwork(): string;

    resolveAllTracks(): Promise<Lavalink.Track[]>;
}

export class SpotifyTrack extends SpotifyItem {
    #private;
    type: SpotifyItemType.Track;
    data: Spotify.Track;

    constructor(manager: SpotifyManager, track: Spotify.Track);

    get name(): string;

    get artists(): Spotify.Artist[];

    get album(): Spotify.Album;

    get artwork(): string;

    resolveLavalinkTrack(): Promise<Lavalink.Track>;
}

export class SpotifyManager {
    #private;
    static readonly BASE_URL = "https://api.spotify.com/v1";
    static readonly SOURCE_PREFIX: {
        youtube: string;
        "youtube music": string;
        soundcloud: string;
    };
    readonly lavaclient: Manager;
    readonly options: SpotifyManagerOptions;
    loaders: Loader[];
    autoResolveYoutubeVideos: boolean;
    playlistLimit: number;
    albumLimit: number;
    searchPrefix: string;
    searchFormat: string;
    market: string;

    constructor(lavaclient: Manager, options: SpotifyManagerOptions);

    get clientId(): string;

    get clientSecret(): string;

    get token(): string | null;

    isSpotifyUrl(url: string): boolean;

    makeRequest<T extends Dictionary = Dictionary>(endpoint: string, prefixBaseUrl?: boolean): Promise<T>;

    load(url: string): Promise<Item | null>;

    renew(): Promise<void>;
}

export type SearchPrefix = "youtube" | "youtube music" | "soundcloud";

export interface SpotifyManagerOptions {
    playlistLimit?: number;
    albumLimit?: number;
    disabledItems?: SpotifyItemType[];
    clientId: string;
    clientSecret: string;
    autoResolveYoutubeVideos?: boolean;
    searchPrefix?: SearchPrefix;
    searchFormat?: string;
    market?: string;
}

export class SpotifyPlugin extends Plugin {
    readonly options: SpotifyManagerOptions;
    spotify: SpotifyManager;

    constructor(options: SpotifyManagerOptions);

    search(url: string): Promise<SpotifyItem | null>;

    load(manager: Manager): Promise<void>;
}

