import type { Track, TrackInfo } from "@lavaclient/types/v3";
import { decode } from "lavaclient";

export class Song implements TrackInfo {
    readonly track: string;
    readonly requester?: string;

    length: number;
    identifier: string;
    author: string;
    isStream: boolean;
    position: number;
    title: string;
    uri: string;
    isSeekable: boolean;
    sourceName: string;

    constructor(track: string | Track, requester?: string) {
        this.track = typeof track === "string" ? track : track.track;
        this.requester = requester;

        const info = typeof track === "string"
            ? decode(track)
            : track.info;

        if (!info) {
            throw new Error("Unable to decode track hash.");
        }

        this.length = info.length;
        this.identifier = info.identifier;
        this.author = info.author;
        this.isStream = info.isStream;
        this.position = info.position;
        this.title = info.title;
        this.uri = info.uri;
        this.isSeekable = info.isSeekable;
        this.sourceName = info.sourceName;
    }
}
