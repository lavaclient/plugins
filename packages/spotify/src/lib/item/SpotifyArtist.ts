import { SpotifyItem, SpotifyItemType } from "../abstract/SpotifyItem";
import { SpotifyTrack } from "./SpotifyTrack";

import type { SpotifyManager } from "../SpotifyManager";
import type { Spotify } from "../spotify";
import type * as Lavalink from "@lavaclient/types/v3";

export class SpotifyArtist extends SpotifyItem {
    type: SpotifyItemType.Artist = SpotifyItemType.Artist;

    /**
     * The spotify data for this artist.
     */
    readonly data: Spotify.Artist;

    /**
     * The top tracks for this artist.
     */
    readonly topTracks: SpotifyTrack[];

    /**
     * @param manager The spotify manager.
     * @param data The data for this artist.
     * @param topTracks The top tracks for this artist.
     */
    constructor(
        manager: SpotifyManager,
        data: Spotify.Artist,
        topTracks: Spotify.Track[]
    ) {
        super(manager);

        this.data = data;
        this.topTracks = topTracks.map(
            track => new SpotifyTrack(manager, track)
        );
    }

    /**
     * This artist's name.
     */
    get name(): string {
        return this.data.name;
    }

    /**
     * The artwork for this artist.
     */
    get artwork(): string {
        const undef = this.data.images.some(i => !i.height || !i.width);
        if (undef) {
            return this.data.images[0].url;
        }

        return this.data.images.sort((a, b) => b.width! - a.width!)[0].url;
    }

    /**
     * Resolves every top track of this artist..
     * @returns The resolved lavalink tracks.
     */
    async resolveYoutubeTracks(): Promise<Lavalink.Track[]> {
        const promises = this.topTracks.map(t => t.resolveYoutubeTrack());
        return await Promise.all(promises);
    }
}
