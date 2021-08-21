import { Loader } from "../abstract/Loader";
import { SpotifyItemType } from "../abstract/SpotifyItem";

import { SpotifyArtist } from "./SpotifyArtist";

import type { SpotifyManager } from "../SpotifyManager";
import type { Spotify } from "../spotify";

export class SpotifyArtistLoader extends Loader {
    itemType: SpotifyItemType = SpotifyItemType.Artist;

    /**
     * The regex patterns for identifying different variations of a artist url.
     */
    matchers = [
        /^(?:https?:\/\/|)?(?:www\.)?open\.spotify\.com\/artist\/([a-zA-Z\d-_]+)/,
        /^spotify:artist:([a-zA-Z\d-_]+)$/,
    ];

    /**
     * Loads a playlist from the Spotify API.
     *
     * @param manager The spotify manager.
     * @param id The Artist ID.
     */
    async load(
        manager: SpotifyManager,
        [, id]: RegExpExecArray
    ): Promise<SpotifyArtist> {
        const artist = await manager.makeRequest<Spotify.Artist>(
            `/artists/${id}`
        );
        const { tracks } = await manager.makeRequest<TopTracks>(
            `/artists/${id}/top-tracks?market=${manager.options.market}`
        );
        return new SpotifyArtist(manager, artist, tracks);
    }
}

interface TopTracks {
    tracks: Spotify.Track[];
}
