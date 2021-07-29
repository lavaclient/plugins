import { EventEmitter } from "events";
import { Song } from "./Song";

import type { Player } from "lavaclient";

export class Queue extends EventEmitter {
    /**
     * The tracks that are in this queue.
     */
    readonly tracks: Song[];

    /**
     * The player for this queue.
     */
    readonly player: Player;

    /**
     * The previously played songs.
     */
    previous: Song[];

    /**
     * Whether this queue has been started or not.
     */
    started: boolean;

    /**
     * The currently playing song.
     */
    current?: Song;

    /**
     * The current length of the queue.
     */
    length: number;

    /**
     * The type of loop that is occurring.
     */
    private _loop?: "song" | "queue";

    /**
     * @param player
     */
    constructor(player: Player) {
        super();

        player.manager.emit("queueCreate", this);

        this.player = player
            .on("end", (event) => {
                if (event && ![ "REPLACED" ].includes(event.reason)) {
                    this.emit("trackEnd", this.current);
                    if (this._loop === "song") {
                        this.tracks.unshift(this.current!);
                    } else {
                        this.previous.unshift(this.current!);
                    }

                    this._next();
                    if (!this.current) {
                        if (this._loop === "queue") {
                            this.tracks.push(...this.previous.reverse());
                            this.previous = [];
                            return this.start();
                        }

                        this.emit("finished");
                        return;
                    }

                    return this.player.play(this.current.track);
                }
            })
            .on("start", () => this.emit("trackStart", this.current));

        this.tracks = [];
        this.previous = [];
        this.started = false;
        this.length = 0;
    }

    /**
     * The current type of loop that is occurring.
     */
    get loopType(): "song" | "queue" | undefined {
        return this._loop;
    }

    /**
     * Skips the current song and returns the new playing one.
     * @since 2.0.1
     */
    async skip(): Promise<Song | undefined> {
        await this.player.stop();
        return this.current;
    }

    /**
     * Start the queue.
     * @since 1.0.0
     */
    async start(): Promise<boolean> {
        if (!this.current) {
            this._next();
        }

        if (!this.current) {
            return false;
        }

        await this.player.play(this.current.track);

        return this.started = true;
    }

    /**
     * Add songs to the queue.
     * @param songs The song(s) to add.
     * @param requester The user that requested this song.
     * @since 1.00.
     */
    add(songs: Addable | Array<Addable>, requester?: string | Record<string, any>): number {
        const requesterId = requester
            ? typeof requester === "string"
                ? requester
                : requester.id
            : null;
        for (const song of (Array.isArray(songs) ? songs : [ songs ])) {
            let toAdd: Song | null = null;
            if (song instanceof Song) {
                toAdd = song;
            } else if (typeof song === "string") {
                toAdd = new Song(song, requesterId);
            } else if (typeof song === "object") {
                toAdd = new Song(song.track, requesterId);
            }

            if (toAdd) {
                this.tracks.push(toAdd);
                this.length++;
            }
        }

        return this.length;
    }

    emit(event: string, ...args: any[]): boolean {
        if (!event.startsWith("_")) {
            const _event = event === "finished" ? "queueFinished" : event;
            if (this.player.manager.listenerCount(_event)) {
                this.player.manager.emit(_event, this, ...args);
            }
        }

        return super.emit(event, ...args);
    }

    /**
     * Loop the track or queue.
     * @param type
     * @since 2.0.1
     */
    loop(type: "queue" | "song"): Queue {
        this._loop = this._loop === type ? undefined : type;
        return this;
    }

    /**
     * Sort the queued songs.
     * @param predicate
     * @since 1.0.0
     */
    sort(predicate?: (a: Song, b: Song) => number): Array<Song> {
        return this.tracks.sort(predicate);
    }

    /**
     * Shuffle all the tracks in the queue.
     * @since 1.0.0
     */
    shuffle(): void {
        for (let i = this.tracks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [ this.tracks[i], this.tracks[j] ] = [ this.tracks[j], this.tracks[i] ];
        }
    }

    /**
     * Get the next song in the queue.
     * @private
     */
    private _next() {
        return (this.current = this.tracks.shift());
    }
}

export type Addable = string | Record<string, any> | Song;
