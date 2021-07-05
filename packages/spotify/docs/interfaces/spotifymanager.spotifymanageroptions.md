[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [SpotifyManager](../modules/spotifymanager.md) / SpotifyManagerOptions

# Interface: SpotifyManagerOptions

[SpotifyManager](../modules/spotifymanager.md).SpotifyManagerOptions

## Table of contents

### Properties

- [albumLimit](spotifymanager.spotifymanageroptions.md#albumlimit)
- [autoResolveYoutubeVideos](spotifymanager.spotifymanageroptions.md#autoresolveyoutubevideos)
- [clientId](spotifymanager.spotifymanageroptions.md#clientid)
- [clientSecret](spotifymanager.spotifymanageroptions.md#clientsecret)
- [disabledItems](spotifymanager.spotifymanageroptions.md#disableditems)
- [market](spotifymanager.spotifymanageroptions.md#market)
- [playlistLimit](spotifymanager.spotifymanageroptions.md#playlistlimit)
- [searchFormat](spotifymanager.spotifymanageroptions.md#searchformat)
- [searchPrefix](spotifymanager.spotifymanageroptions.md#searchprefix)

## Properties

### albumLimit

• `Optional` **albumLimit**: `number`

Total number of pages to load, each page having 50 tracks.

#### Defined in

[SpotifyManager.ts:234](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L234)

___

### autoResolveYoutubeVideos

• `Optional` **autoResolveYoutubeVideos**: `boolean`

Whether to automatically fetch the youtube video for spotify tracks.

#### Defined in

[SpotifyManager.ts:254](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L254)

___

### clientId

• **clientId**: `string`

The client id to use for authorization.

#### Defined in

[SpotifyManager.ts:244](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L244)

___

### clientSecret

• **clientSecret**: `string`

The client secret to use for authorization.

#### Defined in

[SpotifyManager.ts:249](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L249)

___

### disabledItems

• `Optional` **disabledItems**: [`SpotifyItemType`](../enums/abstract_spotifyitem.spotifyitemtype.md)[]

The types of spotify items that will be loaded.

#### Defined in

[SpotifyManager.ts:239](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L239)

___

### market

• `Optional` **market**: `string`

The market to use, must be a ISO 3166-1 alpha-2 country code.

**`see`** https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

#### Defined in

[SpotifyManager.ts:274](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L274)

___

### playlistLimit

• `Optional` **playlistLimit**: `number`

Total numbers of pages to load, each page having 100 tracks.

#### Defined in

[SpotifyManager.ts:229](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L229)

___

### searchFormat

• `Optional` **searchFormat**: `string`

The search format used when resolving lavalink tracks, defaults to "{artist} {track name}"
Available keys:
- {artist} Artist Name
- {track} Track Name

#### Defined in

[SpotifyManager.ts:267](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L267)

___

### searchPrefix

• `Optional` **searchPrefix**: [`SearchPrefix`](../modules/spotifymanager.md#searchprefix)

The search prefix used for resolving lavalink tracks, defaults to "youtube".

#### Defined in

[SpotifyManager.ts:259](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L259)
