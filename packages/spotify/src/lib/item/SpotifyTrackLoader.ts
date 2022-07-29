import { Loader } from "../abstract/Loader";
import { SpotifyItemType } from "../abstract/SpotifyItem";

import { SpotifyTrack } from "./SpotifyTrack";

import type { SpotifyManager } from "../SpotifyManager";
import type { Spotify } from "../spotify";

export class SpotifyTrackLoader extends Loader {
    itemType: SpotifyItemType.Track = SpotifyItemType.Track;

    /**
     * The regex patterns used for identifying different types of spotify urls.
     */
    matchers = [
        /^(?:https?:\/\/|)?(?:www\.)?open\.spotify\.com\/track\/([a-zA-Z\d-_]+)/,
        /spotify:track:([a-zA-Z\d-_]+)$/,
    ];

    /**
     * Loads a SpotifyTrack from the spotify api.
     * @param manager The SpotifyManager instance.
     * @param id The track ID.
     * @returns The fetched track.
     */
    async load(
        manager: SpotifyManager,
        [, id]: RegExpExecArray
    ): Promise<SpotifyTrack> {
        const track = await manager.makeRequest<Spotify.Track>(`/tracks/${id}`);
        return new SpotifyTrack(manager, track);
    }
}
