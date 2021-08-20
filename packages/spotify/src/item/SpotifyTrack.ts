import { SpotifyItem, SpotifyItemType } from "../abstract/SpotifyItem";

import type * as Lavalink from "@lavaclient/types";
import type { SpotifyManager } from "../SpotifyManager";
import type { Spotify } from "../spotify";

export class SpotifyTrack extends SpotifyItem {
    type: SpotifyItemType.Track = SpotifyItemType.Track;

    /**
     * The spotify track data.
     */
    data: Spotify.Track;

    /**
     * The lavalink track.
     * @private
     */
    #track: Lavalink.Track | null = null;

    /**
     * @param manager The spotify manager.
     * @param track The spotify track data.
     */
    constructor(manager: SpotifyManager, track: Spotify.Track) {
        super(manager);

        this.data = track;
    }

    /**
     * The name of this track.
     */
    get name(): string {
        return this.data.name;
    }

    /**
     * The artists that made this track.
     */
    get artists(): Spotify.Artist[] {
        return this.data.artists;
    }

    /**
     * The album data for this track.
     */
    get album(): Spotify.Album {
        return this.data.album;
    }

    /**
     * The artwork for this track.
     */
    get artwork(): string {
        const undef = this.album.images.some(i => !i.height || !i.width);
        if (undef) {
            return this.album.images[0].url;
        }

        return this.album.images.sort((a, b) => b.width! - a.width!)[0].url;
    }

    /**
     * Resolves the lavalink track.
     */
    async resolveLavalinkTrack(): Promise<Lavalink.Track> {
        if (this.#track != null) {
            return this.#track;
        }

        let query = `${this.manager.searchPrefix}`;
        query += this.manager.options.searchFormat
            .replace("{track}", this.data.name)
            .replace("{artist}", this.data.artists[0].name);

        const searchResults = await this.manager.lavaclient.rest.loadTracks(query);
        return this.#track = searchResults.tracks[0];
    }
}
