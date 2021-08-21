import { Loader } from "../abstract/Loader";
import { SpotifyItemType } from "../abstract/SpotifyItem";

import { SpotifyAlbum } from "./SpotifyAlbum";
import { SpotifyPlaylist } from "./SpotifyPlaylist";

import type { SpotifyManager } from "../SpotifyManager";
import type { SpotifyTrack } from "./SpotifyTrack";
import type { Spotify } from "../spotify";

export class SpotifyPlaylistLoader extends Loader {
    itemType: SpotifyItemType.Playlist = SpotifyItemType.Playlist;

    /**
     * The regex patterns used for identifying different types of spotify urls.
     */
    matchers = [
        /^(?:https?:\/\/|)?(?:www\.)?open\.spotify\.com\/playlist\/([a-zA-Z\d-_]+)/,
        /spotify:playlist:([a-zA-Z\d-_]+)$/,
    ];

    /**
     * Loads all tracks within a playlist.
     *
     * @param manager The SpotifyManager instance.
     * @param playlist The playlist object.
     */
    private static async loadTracks(
        manager: SpotifyManager,
        playlist: Spotify.Playlist
    ): Promise<SpotifyTrack[]> {
        let next = playlist.tracks.next,
            page = 1;

        const limit = manager.options.playlistPageLimit,
            tracks = SpotifyAlbum.convertTracks(
                manager,
                playlist.tracks.items.map(i => i.track)
            );

        while (next != null && limit === -1 ? true : page < limit) {
            const { items, next: _next } = await manager.makeRequest<
                Spotify.PagingObject<Spotify.PlaylistTracks>
            >(next!, false);

            tracks.push(
                ...SpotifyAlbum.convertTracks(
                    manager,
                    items.map(i => i.track)
                )
            );
            next = _next;
            page++;
        }

        return tracks;
    }

    /**
     * Loads a playlist from the spotify api.
     *
     * @param manager The SpotifyManager instance.
     * @param id The playlist ID.
     */
    async load(
        manager: SpotifyManager,
        [, id]: RegExpExecArray
    ): Promise<SpotifyPlaylist> {
        const playlist = await manager.makeRequest<Spotify.Playlist>(
            `/playlists/${id}`
        );
        return new SpotifyPlaylist(
            manager,
            playlist,
            await SpotifyPlaylistLoader.loadTracks(manager, playlist)
        );
    }
}
