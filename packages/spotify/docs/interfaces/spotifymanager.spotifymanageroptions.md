[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [SpotifyManager](../modules/spotifymanager.md) / SpotifyManagerOptions

# Interface: SpotifyManagerOptions

[SpotifyManager](../modules/spotifymanager.md).SpotifyManagerOptions

## Hierarchy

* **SpotifyManagerOptions**

## Table of contents

### Properties

- [albumLimit](spotifymanager.spotifymanageroptions.md#albumlimit)
- [autoResolveYoutubeVideos](spotifymanager.spotifymanageroptions.md#autoresolveyoutubevideos)
- [clientId](spotifymanager.spotifymanageroptions.md#clientid)
- [clientSecret](spotifymanager.spotifymanageroptions.md#clientsecret)
- [disabledItems](spotifymanager.spotifymanageroptions.md#disableditems)
- [playlistLimit](spotifymanager.spotifymanageroptions.md#playlistlimit)

## Properties

### albumLimit

• `Optional` **albumLimit**: *undefined* \| *number*

Total number of pages to load, each page having 50 tracks.

Defined in: [SpotifyManager.ts:211](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L211)

___

### autoResolveYoutubeVideos

• `Optional` **autoResolveYoutubeVideos**: *undefined* \| *boolean*

Whether to automatically fetch the youtube video for spotify tracks.

Defined in: [SpotifyManager.ts:231](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L231)

___

### clientId

• **clientId**: *string*

The client id to use for authorization.

Defined in: [SpotifyManager.ts:221](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L221)

___

### clientSecret

• **clientSecret**: *string*

The client secret to use for authorization.

Defined in: [SpotifyManager.ts:226](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L226)

___

### disabledItems

• `Optional` **disabledItems**: *undefined* \| [*SpotifyItemType*](../modules/abstract_spotifyitem.md#spotifyitemtype)[]

The types of spotify items that will be loaded.

Defined in: [SpotifyManager.ts:216](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L216)

___

### playlistLimit

• `Optional` **playlistLimit**: *undefined* \| *number*

Total numbers of pages to load, each page having 100 tracks.

Defined in: [SpotifyManager.ts:206](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L206)
