import type { SpotifyManager } from "../SpotifyManager";

export abstract class SpotifyItem {
    /**
     * The spotify manager.
     */
    readonly manager!: SpotifyManager;

    /**
     * The type of spotify item this is.
     */
    abstract type: SpotifyItemType;

    /**
     * @param manager The spotify manager.
     */
    protected constructor(manager: SpotifyManager) {
        Object.defineProperty(this, "manager", {
            value: manager,
            configurable: false,
            enumerable: false,
            writable: false,
        });
    }
}

export enum SpotifyItemType {
    Artist,
    Playlist,
    Track,
    Album,
}
