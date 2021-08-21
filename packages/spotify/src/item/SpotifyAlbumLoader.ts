import { Loader } from "../abstract/Loader";
import { SpotifyAlbum } from "./SpotifyAlbum";
import { SpotifyItemType } from "../abstract/SpotifyItem";

import type { SpotifyManager } from "../SpotifyManager";
import type { SpotifyTrack } from "./SpotifyTrack";
import type { Spotify } from "../spotify";

export class SpotifyAlbumLoader extends Loader {
    itemType: SpotifyItemType.Album = SpotifyItemType.Album;

    /**
     * The regex patterns used for identifying different types of spotify urls.
     */
    matchers = [
        /^(?:https?:\/\/|)?(?:www\.)?open\.spotify\.com\/album\/([a-zA-Z\d-_]+)/,
        /^spotify:album:([a-zA-Z\d-_]+)$/,
    ];

    /**
     * Loads all tracks within the provided album.
     *
     * @param manager The SpotifyManager instance.
     * @param album The album object.
     */
    private static async loadTracks(
        manager: SpotifyManager,
        album: Spotify.Album
    ): Promise<SpotifyTrack[]> {
        let next = album.tracks.next,
            page = 1;

        const limit = manager.options.albumPageLimit,
            tracks = SpotifyAlbum.convertTracks(manager, album.tracks.items);

        while (next != null && limit === -1 ? true : page < limit) {
            const { items, next: _next } = await manager.makeRequest<
                Spotify.PagingObject<Spotify.Track>
            >(next!, false);

            tracks.push(...SpotifyAlbum.convertTracks(manager, items));
            next = _next;
            page++;
        }

        return tracks;
    }

    /**
     * Loads an album from the spotify api.
     *
     * @param manager The SpotifyManager instance.
     * @param id The album id.
     */
    async load(
        manager: SpotifyManager,
        [, id]: RegExpExecArray
    ): Promise<SpotifyAlbum> {
        const album = await manager.makeRequest<Spotify.Album>(`/albums/${id}`);
        return new SpotifyAlbum(
            manager,
            album,
            await SpotifyAlbumLoader.loadTracks(manager, album)
        );
    }
}
