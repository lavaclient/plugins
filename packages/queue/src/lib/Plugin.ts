import { Queue } from "./Queue";
import { Player } from "lavaclient";

/** @internal */
export const _queue: unique symbol = Symbol.for("Player#queue");

export function load(queueClass: typeof Queue = Queue): void {
    Reflect.defineProperty(Player.prototype, "queue", {
        get(this: Player) {
            return (this[_queue] ??= new queueClass(this));
        },
    });
}
