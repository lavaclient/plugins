import { SpotifyItem, SpotifyItemType } from "../abstract/SpotifyItem";
import { SpotifyTrack } from "./SpotifyTrack";

import type * as Lavalink from "@lavaclient/types";
import type { SpotifyManager } from "../SpotifyManager";
import type { Spotify } from "../spotify";

export class SpotifyAlbum extends SpotifyItem {
  readonly type: SpotifyItemType.Album = SpotifyItemType.Album;

  /**
   * The album data.
   */
  data: Spotify.Album;

  /**
   * The spotify tracks of this album.
   * @private
   */
  readonly tracks: SpotifyTrack[];

  /**
   * @param manager The spotify manager.
   * @param album
   * @param tracks
   */
  constructor(manager: SpotifyManager, album: Spotify.Album, tracks: Array<SpotifyTrack>) {
    super(manager);

    this.data = album;
    this.tracks = tracks;
  }

  /**
   * Converts raw tracks into SpotifyTracks
   * @param manager
   * @param tracks
   */
  static convertTracks(manager: SpotifyManager, tracks: Spotify.Track[]): SpotifyTrack[] {
    return tracks.map(t => new SpotifyTrack(manager, t));
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
   * The artwork for this track.
   */
  get artwork(): string | null {
    if (!this.data.images?.length) {
      return null;
    }

    const undef = this.data.images.some(i => !i.height || !i.width);
    if (undef) {
      return this.data.images[0].url;
    }

    return this.data.images.sort((a, b) => b.width! - a.width!)[0].url;
  }

  /**
   * Resolves every track in this album.
   * @returns The resolved lavalink tracks.
   */
  async resolveAllTracks(): Promise<Lavalink.Track[]> {
    const promises = this.tracks.map(t => t.resolveLavalinkTrack());
    return await Promise.all(promises);
  }

}
