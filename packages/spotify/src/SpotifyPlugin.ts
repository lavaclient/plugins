import { Cluster, ClusterNode, Node } from "lavaclient";
import { SpotifyManager, SpotifyManagerOptions } from "./SpotifyManager";

export const _manager: unique symbol = Symbol.for("SpotifyManager");

export function load(options: SpotifyManagerOptions) {
    Reflect.defineProperty(Node.prototype, "spotify", {
        get(this: Node | ClusterNode) {
            return this instanceof ClusterNode
                ? this.cluster.spotify
                : (this[_manager] ??= new SpotifyManager(this, options));
        },
    });

    Reflect.defineProperty(Cluster.prototype, "spotify", {
        get(this: Cluster) {
            return (this[_manager] ??= new SpotifyManager(this, options));
        },
    });
}

declare module "lavaclient" {
    interface Node {
        readonly spotify: SpotifyManager;

        /**
         * @internal
         */
        [_manager]?: SpotifyManager;
    }

    interface Cluster {
        readonly spotify: SpotifyManager;

        /**
         * @internal
         */
        [_manager]?: SpotifyManager;
    }
}
