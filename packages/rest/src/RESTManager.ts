import { URLSearchParams } from "url";
import { request, RequestOptions } from "http";

import type * as Lava from "@lavaclient/types";
import type { Manager, Socket } from "lavaclient";

export class REST {
  public readonly socket: Socket;

  /**
   * @param socket
   */
  public constructor(socket: Socket) {
    this.socket = socket;
  }

  /**
   * The player manager.
   */
  public get manager(): Manager {
    return this.socket.manager;
  }

  /**
   * Load lavaplayer tracks.
   * @param identifier - Search identifier.
   */
  public resolve(identifier: string): Promise<Lava.LoadTracksResponse> {
    return this.make(`/loadtracks?${new URLSearchParams({ identifier })}`)
      .catch((e) => this.manager.emit("error", e, this.socket.id));
  }

  /**
   * Decode a lavaplayer track into Track Info.
   * @param track - The base64 lavaplayer track.
   * @since Lavalink v1
   */
  public decode(track: string): Promise<Lava.TrackInfo> {
    return this.make(`/decodetrack?${new URLSearchParams({ track })}`)
      .catch((e) => this.manager.emit("error", e, this.socket.id));
  }

  /**
   * Route Planner - Returns the route planner status.
   * @since Lavalink v3.2.2
   */
  public routePlannerStatus(): Promise<Lava.RoutePlanner> {
    return this.make("/routeplanner/status")
      .then((r) => r)
      .catch((e) => this.manager.emit("error", e, this.socket.id));
  }

  /**
   * Route Planner - Unmark a failing address.
   * @param address - The failing address.
   * @since Lavalink v3.2.2
   */
  public unmarkFailingAddress(address: string): Promise<void> {
    return this.make("/routeplanner/free/address", {
        method: "post"
      }, JSON.stringify({ address }))
      .then((r) => r)
      .catch((e) => this.manager.emit("error", e, this.socket.id));
  }

  /**
   * Route Planner - Unmark all failing addresses.
   * @since v3.2.2
   */
  public unmarkAllFailingAddresses(): Promise<void> {
    return this.make("/routeplanner/free/all", { method: "post" })
      .catch((e) => this.manager.emit("error", e, this.socket.id));
  }

  /**
   * Make a request to lavalink.
   * @since 1.0.0
   */
  protected make(path: string, options: RequestOptions = {}, body?: any): Promise<any> {
    return new Promise((res, rej) => {
      request(`http://${this.socket.host}:${this.socket.port}${path}`, {
        headers: { "Authorization": this.socket.password },
        ...options
      }, (r) => {
        let chunk = "";
        r.on("data", (d) => chunk += d);
        r.on("end", () => res(JSON.parse(chunk)));
      })
        .on("error", rej)
        .end(typeof body !== "string" ? JSON.stringify(body) : body);
    });
  }
}