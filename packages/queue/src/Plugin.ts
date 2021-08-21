import { Queue as BaseQueue } from "./Queue";
import { Player } from "lavaclient";

/** @internal */
export const _queue: unique symbol = Symbol.for("Player#queue");

export function load(Queue: typeof BaseQueue = BaseQueue): void {
    Reflect.defineProperty(Player.prototype, "queue", {
        get(this: Player) {
            return (this[_queue] ??= new Queue(this));
        },
    });
}
