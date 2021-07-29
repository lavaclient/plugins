import { Player, Plugin, Structures } from "lavaclient";
import { Queue } from "./Queue";

export class QueuePlugin extends Plugin {
    /**
     * The type of queue to use.
     */
    queue: typeof Queue;

    /**
     * @param queue
     */
    constructor(queue: typeof Queue = Queue) {
        super();

        this.queue = queue;
    }

    /**
     * Initiates this plugin
     * @since 1.0.0
     */
    init(): typeof Player {
        const queue = this.queue;

        return Structures.extend("player", (Player) =>
            class extends Player {
                queue: Queue = new queue(this);
            });
    }
}
