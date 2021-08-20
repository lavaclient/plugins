import type { DiscordResource, Player, Snowflake } from "lavaclient";
import type { TypedEmitter } from "tiny-typed-emitter";
import type { Track, TrackInfo } from "@lavaclient/types";

declare module "lavaclient" {
    interface Player {
        readonly queue: Queue;
    }
    interface ClusterEvents {
        nodeQueueCreate: (node: Node, queue: Queue) => void;
        nodeQueueFinish: (node: Node, queue: Queue) => void;
        nodeTrackStart: (node: Node, queue: Queue, song: Song) => void;
        nodeTrackEnd: (node: Node, queue: Queue, song: Song) => void;
    }
    interface NodeEvents {
        queueCreate: (queue: Queue) => void;
        queueFinish: (queue: Queue) => void;
        trackStart: (queue: Queue, song: Song) => void;
        trackEnd: (queue: Queue, song: Song) => void;
    }
}

export function load(Queue?: typeof BaseQueue): void;

export enum LoopType {
    None = 0,
    Queue = 1,
    Song = 2
}
export class Queue extends TypedEmitter<QueueEvents> {
    readonly player: Player;
    tracks: Song[];
    previous: Song[];
    loop: Loop;
    last: Song | null;
    current: Song | null;
    constructor(player: Player);
    skip(): Promise<Song | null>;
    start(): Promise<boolean>;
    next(): Promise<boolean>;
    emit<U extends keyof QueueEvents>(event: U, ...args: Parameters<QueueEvents[U]>): boolean;
    add(songs: Addable | Array<Addable>, requester?: Snowflake | DiscordResource): number;
    setLoop(type: LoopType, max?: number): Queue;
    sort(predicate?: (a: Song, b: Song) => number): Array<Song>;
    shuffle(): void;
}
export type Addable = string | Track | Song;
export interface QueueEvents {
    trackStart: (song: Song) => void;
    trackEnd: (song: Song) => void;
    finish: () => void;
}
export interface Loop {
    type: LoopType;
    current: number;
    max: number;
}

export class Song implements TrackInfo {
    readonly track: string;
    readonly requester?: string;
    length: number;
    identifier: string;
    author: string;
    isStream: boolean;
    position: number;
    title: string;
    uri: string;
    isSeekable: boolean;
    sourceName: string;
    constructor(track: string | Track, requester?: string);
}

