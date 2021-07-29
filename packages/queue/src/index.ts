import type { Queue } from "./Queue";
import type { Song } from "./Song";

function isInstalled(id: string): boolean {
    try {
        require(id);
        return true;
    } catch (error) {
        return false;
    }
}

if (!isInstalled("lavaclient")) {
    throw new Error("Please install Lavaclient.");
}

export * from "./Queue";
export * from "./Plugin";
export * from "./Song";

declare module "lavaclient" {
    interface Player {
        queue: Queue;
    }

    interface Manager {
        on(event: "trackStart", listener: (queue: Queue, song: Song) => void): this;

        once(event: "trackStart", listener: (queue: Queue, song: Song) => void): this;

        on(event: "trackEnd", listener: (queue: Queue, song: Song) => void): this;

        once(event: "trackEnd", listener: (queue: Queue, song: Song) => void): this;

        on(event: "queueFinished", listener: (queue: Queue) => void): this;

        once(event: "queueFinished", listener: (queue: Queue) => void): this;
    }
}
