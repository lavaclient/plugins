import { decode } from "@lavalink/encoding";

export class Song implements TrackInfo {
  /**
   * The base64 lavaplayer track.
   */
  public track: string;

  /**
   * The user that requested this song.
   */
  public requester?: string;

  /**
   * The length of this track.
   */
  public length: number;

  /**
   * The identifier of this track.
   */
  public identifier: string;

  /**
   * The author of this track.
   */
  public author: string;

  /**
   * Whether this track is a stream.
   */
  public isStream: boolean;

  /**
   * The position of this track
   */
  public position: number;

  /**
   * The title of this track.
   */
  public title: string;

  /**
   * The uri of this track.
   */
  public uri: string;

  /**
   * @param track
   * @param requester
   */
  public constructor(track: string, requester?: string) {
    this.track = track;
    this.requester = requester;

    const decoded = decode(this.track);
    this.length = Number(decoded.length);
    this.identifier = decoded.identifier;
    this.author = decoded.author;
    this.isStream = decoded.isStream;
    this.position = Number(decoded.position);
    this.title = decoded.title;
    this.uri = decoded.uri!;
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
