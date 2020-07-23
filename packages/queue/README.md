# Lavaclient Queue Support

> A lavaclient plugin that adds queue support to the Player class.

- **✅ Verified**: This is a verified Lavaclient plugin.

[Support](https://discord.gg/BnQECNd) &bull; [Github](https://github.com/lavaclient/plugins)

## Installation

```bash
npm install lavaclient-queue
```

## Setup

> This only works with lavaclient 3.x.x

```js
import { Manager } from "lavaclient";
import { QueuePlugin } from "@lavaclient/queue";

const manager = new Manager(...);
manager.use(new QueuePlugin());

// Or

const manager = new Manager(..., {
  plugins: [new QueuePlugin()],
  ...
});

```
