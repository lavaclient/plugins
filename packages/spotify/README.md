<img src="https://i.imgur.com/LvsojLc.png" align="center">

> A lavaclient plugin that makes it easy to integrate spotify searching into any project.

- **Official Lavaclient Plugin**
- Supports **tracks**, **playlists**, and **albums**.
- ~~Handles RateLimiting~~ _soon_

<h2 align="center">Installation</h2>

##### Stable

```shell
yarn add @lavaclient/spotify # or npm install
```

##### Beta

```shell
yarn add @lavaclient/spotify@beta # or npm install
```

<h2 align="center">Usage</h2>

```ts
import { Track, load } from "@lavaclient/spotify";

load({
    /* information used to authenticate */
    client: {
        id: "your spotify client id",
        secret: "your spotify client secret",
    },
    /* whether you want spotify tracks to resolve their youtube counterpart */
    autoResolveYoutubeTracks: false,
    /* the loaders to use. */
    loaders: [ "track", "album" ]
});

// example: in a command or something.
if (Spotify.isSpotifyUrl(query)) {
    const item = await Spotify.load(query)
    if (item instanceof Track) {
        const track = await item.resolveYoutubeCounterpart();
        await player.play(track)
    }
}
```

##### Disclaimer

Leaving the **autoResolveYoutubeVideos** option on is much slower and could get you banned from YouTube, however IP Rotation will decrease your chances dramatically.


---

[melike2d](https://dimensional.fun) &copy; 2018 - present
