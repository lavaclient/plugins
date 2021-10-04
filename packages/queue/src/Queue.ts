import { Song } from "./Song";
import {
    DiscordResource,
    getId,
    NodeEvents,
    Player,
    Snowflake,
} from "lavaclient";
import { mayStartNext, Track } from "@lavaclient/types";
import { TypedEmitter } from "tiny-typed-emitter";

export enum LoopType {
    None,
    Queue,
    Song,
}

export class Queue extends TypedEmitter<QueueEvents> {
    tracks: Song[] = [];
    previous: Song[] = [];
    loop: Loop = { type: LoopType.None, current: 0, max: -1 };
    last: Song | null = null;
    current: Song | null = null;

    constructor(readonly player: Player) {
        super();

        player.on("trackStart", () => {
            if (!this.current) {
                /* shouldn't really happen but oh well. */
                return;
            }

            if (
                this.loop.type === LoopType.Song &&
                this.current === this.last
            ) {
                this.loop.current++;
            }

            this.emit("trackStart", this.current);
        });

        player.on("trackEnd", (_, reason) => {
            if (!mayStartNext[reason]) {
                return;
            }

            this.last = this.current;
            if (this.current) {
                switch (this.loop.type) {
                    case LoopType.Song:
                        return this.player.play(this.current, {});
                    case LoopType.Queue:
                        this.previous.push(this.current);
                        break;
                }

                this.emit("trackEnd", this.current);
            }

            if (!this.tracks.length) {
                this.tracks = this.previous;
                this.previous = [];
            }

            return this.next();
        });
    }

    async skip(): Promise<Song | null> {
        await this.player.stop();
        return this.current;
    }

    async start(): Promise<boolean> {
        return this.next();
    }

    async next(): Promise<boolean> {
        const next = this.tracks.shift();
        if (!next) {
            this.emit("finish");
            return false;
        }

        this.current = next;
        await this.player.play(next, {});
        return true;
    }

    clear(): void {
        this.tracks = [];
    }

    remove(song: Song): Song | null;

    remove(index: number): Song | null;

    remove(song: Song | number): Song | null {
        if (typeof song === "number") {
            if (song < 0 || song >= this.tracks.length) {
                /* maybe we should throw an exception? */
                return null;
            }

            return this.tracks.splice(song, 1)[0] ?? null;
        }

        const index = this.tracks.indexOf(song);
        if (index !== -1) {
            /* maybe we should throw an exception? */
            return null;
        }

        return this.tracks.splice(index, 1)[0] ?? null;
    }

    emit<U extends keyof QueueEvents>(
        event: U,
        ...args: Parameters<QueueEvents[U]>
    ): boolean {
        const _event: keyof NodeEvents =
            event === "finish" ? "queueFinish" : event;
        // @ts-expect-error i dont wanna deal with this lol.
        this.player.node.emit(_event, this, ...args);
        return super.emit(event, ...args);
    }

    add(songs: Addable | Array<Addable>, options: AddOptions = {}): number {
        songs = Array.isArray(songs) ? songs : [songs];
        const requesterId = options.requester && getId(options.requester),
            toAdd = songs.map(song =>
                song instanceof Song ? song : new Song(song, requesterId)
            );

        this.tracks[options.next ? "unshift" : "push"](...toAdd);
        return this.tracks.length;
    }

    setLoop(type: LoopType, max = this.loop.max): Queue {
        this.loop.type = type;
        this.loop.max = max;

        return this;
    }

    sort(predicate?: (a: Song, b: Song) => number): Array<Song> {
        return this.tracks.sort(predicate);
    }

    shuffle(): void {
        for (let i = this.tracks.length; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.tracks[i], this.tracks[j]] = [this.tracks[j], this.tracks[i]];
        }
    }
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

export interface AddOptions {
    requester?: Snowflake | DiscordResource;
    next?: boolean;
}
