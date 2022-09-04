import { Queue } from "./Queue";
import { Player } from "lavaclient";

/** @internal */
export const _queue: unique symbol = Symbol.for("Player#queue");

const defaultCreateQueue = (player: Player) => new Queue(player, {
    play: async (_, track) => void await player.play(track)
});

export function load(
    createQueue: (player: Player) => Queue = defaultCreateQueue
): void {
    Reflect.defineProperty(Player.prototype, "queue", {
        get(this: Player) {
            return this[_queue] ??= createQueue(this);
        },
    });
}
