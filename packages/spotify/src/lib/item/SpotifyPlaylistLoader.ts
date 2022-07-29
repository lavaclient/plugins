import { Loader } from "../abstract/Loader";
import { SpotifyItemType } from "../abstract/SpotifyItem";

import { SpotifyPlaylist } from "./SpotifyPlaylist";

import type { SpotifyManager } from "../SpotifyManager";
import type { Spotify } from "../spotify";
import { PageLoader, PageLoadingStrategy } from "../PageLoader";
import { createTrackFactory } from "./SpotifyTrack";

export class SpotifyPlaylistLoader extends Loader {
    readonly itemType: SpotifyItemType.Playlist = SpotifyItemType.Playlist;

    /**
     * The playlist page loader.
     */
    readonly pageLoader: PageLoader;

    /**
     * The regex patterns used for identifying different types of spotify urls.
     */
    matchers = [
        /^(?:https?:\/\/|)?(?:www\.)?open\.spotify\.com\/playlist\/([a-zA-Z\d-_]+)/,
        /spotify:playlist:([a-zA-Z\d-_]+)$/
    ];

    constructor(
        pageLoadingStrategy: PageLoadingStrategy
    ) {
        super();

        this.pageLoader = new PageLoader({
            baseUrl: "/playlists/%s/tracks",
            fetchPage: async (manager, path) => {
                const page = await manager.makeRequest<Spotify.Playlist["tracks"]>(
                    path
                );

                return SpotifyPlaylistLoader.filterTracks(page.items);
            },
            strategy: pageLoadingStrategy
        });
    }

    static filterTracks(tracks: Spotify.PlaylistTrack[]) {
        return tracks
            .map(it => it.track)
            .filter(it => it != null) as Spotify.Track[];
    }

    /**
     * Loads a playlist from the spotify api.
     *
     * @param manager The SpotifyManager instance.
     * @param id The playlist ID.
     */
    async load(
        manager: SpotifyManager,
        [ , id ]: RegExpExecArray
    ): Promise<SpotifyPlaylist> {
        const playlist = await manager.makeRequest<Spotify.Playlist>(
            `/playlists/${id}`
        );

        const tracks = await this.pageLoader.load(manager, id, {
            tracks: SpotifyPlaylistLoader.filterTracks(playlist.tracks.items),
            total: playlist.tracks.total
        });

        return new SpotifyPlaylist(
            manager,
            playlist,
            tracks.map(createTrackFactory(manager))
        );
    }
}
