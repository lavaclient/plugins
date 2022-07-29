import type { ClusterNode } from "lavaclient";
import type { _queue } from "./lib/Plugin";
import type { Queue } from "./lib/Queue";
import type { Song } from "./lib/Song";

export * from "./lib/Queue";
export * from "./lib/Song";
export * from "./lib/Plugin";

declare module "lavaclient" {
    interface Player {
        readonly queue: Queue;

        /** @internal */
        [_queue]: Queue;
    }

    interface ClusterEvents {
        nodeQueueCreate: (node: ClusterNode, queue: Queue) => void;
        nodeQueueFinish: (node: ClusterNode, queue: Queue) => void;
        nodeTrackStart: (node: ClusterNode, queue: Queue, song: Song) => void;
        nodeTrackEnd: (node: ClusterNode, queue: Queue, song: Song) => void;
    }

    interface NodeEvents {
        queueCreate: (queue: Queue) => void;
        queueFinish: (queue: Queue) => void;
        trackStart: (queue: Queue, song: Song) => void;
        trackEnd: (queue: Queue, song: Song) => void;
    }
}
