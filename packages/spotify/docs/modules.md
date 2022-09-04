[@lavaclient/spotify](README.md) / Exports

# @lavaclient/spotify

## Table of contents

### Namespaces

- [Spotify](modules/Spotify.md)

### Enumerations

- [SpotifyItemType](enums/SpotifyItemType.md)

### Classes

- [Loader](classes/Loader.md)
- [PageLoader](classes/PageLoader.md)
- [SpotifyAlbum](classes/SpotifyAlbum.md)
- [SpotifyArtist](classes/SpotifyArtist.md)
- [SpotifyItem](classes/SpotifyItem.md)
- [SpotifyManager](classes/SpotifyManager.md)
- [SpotifyPlaylist](classes/SpotifyPlaylist.md)
- [SpotifyTrack](classes/SpotifyTrack.md)

### Interfaces

- [InitialData](interfaces/InitialData.md)
- [PageLoaderOptions](interfaces/PageLoaderOptions.md)
- [PageLoadingStrategy](interfaces/PageLoadingStrategy.md)
- [SpotifyClientOptions](interfaces/SpotifyClientOptions.md)
- [SpotifyManagerOptions](interfaces/SpotifyManagerOptions.md)

### Type Aliases

- [Item](modules.md#item)
- [SearchPrefix](modules.md#searchprefix)

### Variables

- [\_manager](modules.md#_manager)

### Functions

- [createTrackFactory](modules.md#createtrackfactory)
- [load](modules.md#load)

## Type Aliases

### Item

Ƭ **Item**: [`SpotifyTrack`](classes/SpotifyTrack.md) \| [`SpotifyAlbum`](classes/SpotifyAlbum.md) \| [`SpotifyPlaylist`](classes/SpotifyPlaylist.md) \| [`SpotifyArtist`](classes/SpotifyArtist.md)

#### Defined in

[lib/abstract/Loader.ts:44](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/abstract/Loader.ts#L44)

___

### SearchPrefix

Ƭ **SearchPrefix**: ``"youtube"`` \| ``"youtube music"`` \| ``"soundcloud"``

#### Defined in

[lib/SpotifyManager.ts:230](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/SpotifyManager.ts#L230)

## Variables

### \_manager

• `Const` **\_manager**: unique `symbol`

#### Defined in

[lib/SpotifyPlugin.ts:4](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/SpotifyPlugin.ts#L4)

## Functions

### createTrackFactory

▸ **createTrackFactory**(`manager`): (`track`: [`Track`](interfaces/Spotify.Track.md)) => [`SpotifyTrack`](classes/SpotifyTrack.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`SpotifyManager`](classes/SpotifyManager.md) |

#### Returns

`fn`

▸ (`track`): [`SpotifyTrack`](classes/SpotifyTrack.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `track` | [`Track`](interfaces/Spotify.Track.md) |

##### Returns

[`SpotifyTrack`](classes/SpotifyTrack.md)

#### Defined in

[lib/item/SpotifyTrack.ts:85](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/item/SpotifyTrack.ts#L85)

___

### load

▸ **load**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SpotifyManagerOptions`](interfaces/SpotifyManagerOptions.md) |

#### Returns

`void`

#### Defined in

[lib/SpotifyPlugin.ts:6](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/SpotifyPlugin.ts#L6)
