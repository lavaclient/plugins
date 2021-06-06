# Lavaclient REST

> A lavaclient plugin that adds Lavalink REST Functionality to both the Socket and Manager.

- **✅ Verified**: This is a verified Lavaclient plugin.

[Support](https://discord.gg/CH9ubGPMV6) &bull; [Github](https://github.com/lavaclient/plugins)

## Installation

```bash
npm install lavaclient-rest
```

## Setup

> This only works with lavaclient 3.x.x

```js
import { Manager } from "lavaclient";
import { RESTPlugin } from "@lavaclient/rest";

const manager = new Manager(...);
manager.use(new RESTPlugin());

// Or

const manager = new Manager(..., {
  plugins: [new RESTPlugin()],
  ...
});

// Now:
(async () => {
  const { rest } = manager.ideal[0]; // Gets the first ideal node.
  await rest.resolve("ytsearch:Joji - Gimme Love");
  await rest.decode("...");
  await rest.routePlannerStatus();
  await rest.unmarkFailingAddress("...");
  await rest.unmarkAllFailingAddresses();
})();
```
