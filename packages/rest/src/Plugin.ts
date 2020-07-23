import { Plugin, Structures } from "lavaclient";
import { REST } from "./RESTManager";

export class RESTPlugin extends Plugin {
  /**
   * The REST class we're going to use.
   */
  public rest: typeof REST;

  /**
   * @param rest
   */
  public constructor(rest: typeof REST) {
    super()

    this.rest = rest ?? REST;
  }

  public init(): void {
    const rest = this.rest;

    Structures.extend("socket", (socket) =>
      class Socket extends socket {
        public rest: REST = new rest(this);
      })
  }
}
