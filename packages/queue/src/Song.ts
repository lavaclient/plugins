import { decode } from "@lavalink/encoding";

export class Song {
  /**
   * The base64 lavaplayer track.
   */
  public track: string;
  /**
   * The user that requested this song.
   */
  public requester?: string;

  /**
   * @param track
   * @param requester
   */
  public constructor(track: string, requester?: string) {
    this.track = track;
    this.requester = requester;
  }

  /**
   * The decoded lavaplayer track.
   */
  public get decoded(): TrackInfo {
    const decoded = decode(this.track);
    return {
      ...decoded,
      length: Number(decoded.length),
      position: Number(decoded.position)
    } as any;
  }

  /**
   * The length of this track.
   */
  public get length(): number {
    return this.decoded.length;
  }

  /**
   * The identifier of this track.
   */
  public get identifier(): string {
    return this.decoded.identifier;
  }

  /**
   * The author of this track.
   */
  public get author(): string {
    return this.decoded.author;
  }

  /**
   * Whether this track is a stream.
   */
  public get isStream(): boolean {
    return this.decoded.isStream;
  }

  /**
   * The position of this track
   */
  public get position(): number {
    return this.decoded.position;
  }

  /**
   * The title of this track.
   */
  public get title(): string {
    return this.decoded.title;
  }

  /**
   * The uri of this track.
   */
  public get uri(): string {
    return this.decoded.uri;
  }
}

export interface TrackInfo {
  length: number;
  identifier: string;
  author: string;
  isStream: boolean;
  position: number;
  title: string;
  uri: string;
}
