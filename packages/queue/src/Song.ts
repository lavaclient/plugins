import { decode } from "@lavalink/encoding";

export class Song implements TrackInfo {
    /**
     * The base64 lavaplayer track.
     */
    track: string;

    /**
     * The user that requested this song.
     */
    requester?: string;

    /**
     * The length of this track.
     */
    length: number;

    /**
     * The identifier of this track.
     */
    identifier: string;

    /**
     * The author of this track.
     */
    author: string;

    /**
     * Whether this track is a stream.
     */
    isStream: boolean;

    /**
     * The position of this track
     */
    position: number;

    /**
     * The title of this track.
     */
    title: string;

    /**
     * The uri of this track.
     */
    uri: string;

    /**
     * @param track
     * @param requester
     */
    constructor(track: string, requester?: string) {
        this.track = track;
        this.requester = requester;

        const decoded = decode(this.track);
        this.length = Number(decoded.length);
        this.identifier = decoded.identifier;
        this.author = decoded.author;
        this.isStream = decoded.isStream;
        this.position = Number(decoded.position);
        this.title = decoded.title;
        this.uri = decoded.uri!;
    }
}

export interface TrackInfo {
    length: number;
    identifier: string;
    author: string;
    isStream: boolean;
    position: number;
    title: string;
    uri: string;
}
