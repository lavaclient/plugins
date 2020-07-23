import { Player, Plugin, Structures } from "lavaclient";
import { Queue } from "./Queue";

declare module "lavaclient" {
  interface Player {
    queue: Queue;
  }
}

export class QueuePlugin extends Plugin {
  /**
   * The type of queue to use.
   */
  public queue: typeof Queue

  /**
   * @param queue
   */
  public constructor(queue: typeof Queue = Queue) {
    super();

    this.queue = queue;
  }

  /**
   * Initiates this plugin
   * @since 1.0.0
   */
  public init(): typeof Player {
    const queue = this.queue;

    return Structures.extend("player", (Player) =>
      class extends Player {
        public queue: Queue = new queue(this);
      });
  }
}
