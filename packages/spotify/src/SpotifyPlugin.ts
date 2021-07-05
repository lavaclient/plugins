import { Manager, Plugin } from "lavaclient";
import { SpotifyManager, SpotifyManagerOptions } from "./SpotifyManager";

import type { SpotifyItem } from "./abstract/SpotifyItem";

export class SpotifyPlugin extends Plugin {
    /**
     * The spotify manager options.
     */
    readonly options: SpotifyManagerOptions;

    /**
     * The spotify manager.
     */
    spotify!: SpotifyManager;

    /**
     * @param options The spotify manager options.
     */
    constructor(options: SpotifyManagerOptions) {
        super();

        this.options = options;
    }

    /**
     * Searches spotify.
     * @param url The URL to search for.
     */
    search(url: string): Promise<SpotifyItem | null> {
        return this.spotify.load(url);
    }

    /**
     * Called whenever this plugin gets loaded.
     */
    async load(manager: Manager): Promise<void> {
        this.spotify = new SpotifyManager(manager, this.options);
        Object.defineProperty(manager, "spotify", {
            value: this.spotify,
            writable: false,
            enumerable: false,
            configurable: false,
        });

        await this.spotify.renew();
    }
}
