@lavaclient/spotify / [Exports](modules.md)

# Lavaclient Spotify Support

> A lavaclient plugin that makes it easy to integrate spotify searching into any project.

- **✅ verified**: This is a verified Lavaclient plugin.

[Support](https://discord.gg/CH9ubGPMV6) &bull; [Github](https://github.com/lavaclient/plugins/tree/master/packages/spotify) &bull; [Documentation](https://github.com/lavaclient/plugins/tree/master/packages/spotify/docs)

## Installation

```bash
npm install @lavaclient/spotify
```

## Setup

> This example only works with lavaclient 3.x.x

```ts
import { Manager } from "lavaclient";
import { SpotifyPlugin, SpotifyTrack } from "@lavaclient/spotify";

const manager = new Manager([], {
  plugins: [
    new SpotifyPlugin({
      clientId: "spotify client id",
      clientSecret: "spotify client secret",
      autoResolveYoutubeVideos: false, // whether you want to automatically search for the youtube equivalent.
    })
  ],
  ...
});

// example: in a command or something.
if (manager.spotify.isSpotifyUrl(query)) {
  const item = await manager.spotify.load(query)
  if (item instanceof SpotifyTrack) {
    const track = await item.resolveYoutubeTrack()
    await player.play(track)
  }
}
```

If you need any support join <https://discord.gg/vuJxnYk>.

---

##### Disclaimer

Leaving the "autoResolveYoutubeVideos" option on is much slower and could get you banned from youtube, unless you have
IP rotation set up.

melike2d &copy; 2020 - 2021
