import type { _queue } from "./Plugin";
import type { Queue } from "./Queue";
import type { Song } from "./Song";

export * from "./Queue";
export * from "./Song";
export * from "./Plugin";

declare module "lavaclient" {
    interface Player {
        readonly queue: Queue;

        /** @internal */
        [_queue]: Queue;
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
