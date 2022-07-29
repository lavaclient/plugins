import { Loader } from "../abstract/Loader";
import { SpotifyAlbum } from "./SpotifyAlbum";
import { SpotifyItemType } from "../abstract/SpotifyItem";

import type { SpotifyManager } from "../SpotifyManager";
import type { Spotify } from "../spotify";
import { PageLoader, PageLoadingStrategy } from "../PageLoader";
import { SpotifyPlaylistLoader } from "./SpotifyPlaylistLoader";
import { createTrackFactory } from "./SpotifyTrack";

export class SpotifyAlbumLoader extends Loader {
    readonly itemType: SpotifyItemType.Album = SpotifyItemType.Album;

    /**
     * The playlist page loader.
     */
    readonly pageLoader: PageLoader;

    /**
     * The regex patterns used for identifying different types of spotify urls.
     */
    matchers = [
        /^(?:https?:\/\/|)?(?:www\.)?open\.spotify\.com\/album\/([a-zA-Z\d-_]+)/,
        /^spotify:album:([a-zA-Z\d-_]+)$/,
    ];

    constructor(
        pageLoadingStrategy: PageLoadingStrategy
    ) {
        super();

        this.pageLoader = new PageLoader({
            baseUrl: "/albums/%s/tracks",
            fetchPage: async (manager, path) => {
                const page = await manager.makeRequest<Spotify.Playlist["tracks"]>(
                    path
                );

                return SpotifyPlaylistLoader.filterTracks(page.items);
            },
            strategy: pageLoadingStrategy
        });
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
        const album = await manager.makeRequest<Spotify.Album>(
            `/albums/${id}`
        );

        const tracks = await this.pageLoader.load(manager, id, {
            tracks: album.tracks.items,
            total: album.tracks.total
        });

        return new SpotifyAlbum(
            manager,
            album,
            tracks.map(createTrackFactory(manager))
        );
    }
}
