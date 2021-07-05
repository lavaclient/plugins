[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [item/SpotifyPlaylistLoader](../modules/item_spotifyplaylistloader.md) / SpotifyPlaylistLoader

# Class: SpotifyPlaylistLoader

[item/SpotifyPlaylistLoader](../modules/item_spotifyplaylistloader.md).SpotifyPlaylistLoader

## Hierarchy

- [`Loader`](abstract_loader.loader.md)

  ↳ **`SpotifyPlaylistLoader`**

## Table of contents

### Constructors

- [constructor](item_spotifyplaylistloader.spotifyplaylistloader.md#constructor)

### Properties

- [itemType](item_spotifyplaylistloader.spotifyplaylistloader.md#itemtype)
- [matchers](item_spotifyplaylistloader.spotifyplaylistloader.md#matchers)

### Methods

- [load](item_spotifyplaylistloader.spotifyplaylistloader.md#load)
- [match](item_spotifyplaylistloader.spotifyplaylistloader.md#match)
- [loadTracks](item_spotifyplaylistloader.spotifyplaylistloader.md#loadtracks)

## Constructors

### constructor

• **new SpotifyPlaylistLoader**()

#### Inherited from

[Loader](abstract_loader.loader.md).[constructor](abstract_loader.loader.md#constructor)

## Properties

### itemType

• **itemType**: [`Playlist`](../enums/abstract_spotifyitem.spotifyitemtype.md#playlist)

The item type this loads.

#### Overrides

[Loader](abstract_loader.loader.md).[itemType](abstract_loader.loader.md#itemtype)

#### Defined in

[item/SpotifyPlaylistLoader.ts:12](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyPlaylistLoader.ts#L12)

___

### matchers

• **matchers**: `RegExp`[]

The regex patterns used for identifying different types of spotify urls.

#### Overrides

[Loader](abstract_loader.loader.md).[matchers](abstract_loader.loader.md#matchers)

#### Defined in

[item/SpotifyPlaylistLoader.ts:17](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyPlaylistLoader.ts#L17)

## Methods

### load

▸ **load**(`manager`, `__namedParameters`): `Promise`<[`SpotifyPlaylist`](item_spotifyplaylist.spotifyplaylist.md)\>

Loads a playlist from the spotify api.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager` | [`SpotifyManager`](spotifymanager.spotifymanager-1.md) | The SpotifyManager instance. |
| `__namedParameters` | `RegExpExecArray` | - |

#### Returns

`Promise`<[`SpotifyPlaylist`](item_spotifyplaylist.spotifyplaylist.md)\>

#### Overrides

[Loader](abstract_loader.loader.md).[load](abstract_loader.loader.md#load)

#### Defined in

[item/SpotifyPlaylistLoader.ts:55](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyPlaylistLoader.ts#L55)

___

### match

▸ **match**(`identifier`): ``null`` \| `RegExpExecArray`

Used for finding this loader.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | The identifier to test. |

#### Returns

``null`` \| `RegExpExecArray`

#### Inherited from

[Loader](abstract_loader.loader.md).[match](abstract_loader.loader.md#match)

#### Defined in

[abstract/Loader.ts:31](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/abstract/Loader.ts#L31)

___

### loadTracks

▸ `Static` `Private` **loadTracks**(`manager`, `playlist`): `Promise`<[`SpotifyTrack`](item_spotifytrack.spotifytrack.md)[]\>

Loads all tracks within a playlist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager` | [`SpotifyManager`](spotifymanager.spotifymanager-1.md) | The SpotifyManager instance. |
| `playlist` | [`Playlist`](../interfaces/spotify.spotify-1.playlist.md) | The playlist object. |

#### Returns

`Promise`<[`SpotifyTrack`](item_spotifytrack.spotifytrack.md)[]\>

#### Defined in

[item/SpotifyPlaylistLoader.ts:28](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyPlaylistLoader.ts#L28)
