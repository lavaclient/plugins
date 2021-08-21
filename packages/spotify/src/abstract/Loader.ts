import type { SpotifyItemType } from "./SpotifyItem";
import type { SpotifyManager } from "../SpotifyManager";

import type { SpotifyTrack } from "../item/SpotifyTrack";
import type { SpotifyAlbum } from "../item/SpotifyAlbum";
import type { SpotifyPlaylist } from "../item/SpotifyPlaylist";
import type { SpotifyArtist } from "../item/SpotifyArtist";

export abstract class Loader {
    /**
     * The item type this loads.
     */
    abstract itemType: SpotifyItemType;

    /**
     * The regex(es) used for matching urls.
     */
    abstract matchers: RegExp[];

    /**
     * Used for loading spotify items.
     * @returns A spotify item (album, playlist, or track)
     */
    abstract load(
        manager: SpotifyManager,
        execArray: RegExpExecArray
    ): Promise<Item>;

    /**
     * Used for finding this loader.
     * @param identifier The identifier to test.
     */

    match(identifier: string): RegExpExecArray | null {
        const regex = this.matchers.find(r => r.test(identifier));
        if (!regex) {
            return null;
        }

        return regex.exec(identifier);
    }
}

export type Item =
    | SpotifyTrack
    | SpotifyAlbum
    | SpotifyPlaylist
    | SpotifyArtist;
