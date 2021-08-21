<img src="https://i.imgur.com/LvsojLc.png" align="center">

> Added queue functionality for [**Lavaclient**](https://lavaclient.js.org)

- **Official Lavaclient Plugin**

<h2 align="center">Installation</h2>

##### Stable

```shell
yarn add @lavaclient/queue # or npm install
```

##### Beta

```shell
yarn add @lavaclient/queue@beta # or npm install
```

<h2 align="center">Usage</h2>

```ts
import "@lavaclient/queue/register";
import { Node } from "lavaclient";

const node = new Node({ ... });
const player = node.createPlayer("830616783199010857");

/* search for some tracks to play. */
const results = await node.rest.loadTracks("ytsearch:never gonna give you up");

/* add it to the queue. */
player.queue.add([ results[0] ]); // you can pass the requester in the second parameter
if (!player.playing) {
    player.queue.start();
}
```

---

[melike2d](https://dimensional.fun) &copy; 2018 - present
