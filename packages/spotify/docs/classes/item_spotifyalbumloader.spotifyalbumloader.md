[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [item/SpotifyAlbumLoader](../modules/item_spotifyalbumloader.md) / SpotifyAlbumLoader

# Class: SpotifyAlbumLoader

[item/SpotifyAlbumLoader](../modules/item_spotifyalbumloader.md).SpotifyAlbumLoader

## Hierarchy

- [`Loader`](abstract_loader.loader.md)

  ↳ **`SpotifyAlbumLoader`**

## Table of contents

### Constructors

- [constructor](item_spotifyalbumloader.spotifyalbumloader.md#constructor)

### Properties

- [itemType](item_spotifyalbumloader.spotifyalbumloader.md#itemtype)
- [matchers](item_spotifyalbumloader.spotifyalbumloader.md#matchers)

### Methods

- [load](item_spotifyalbumloader.spotifyalbumloader.md#load)
- [match](item_spotifyalbumloader.spotifyalbumloader.md#match)
- [loadTracks](item_spotifyalbumloader.spotifyalbumloader.md#loadtracks)

## Constructors

### constructor

• **new SpotifyAlbumLoader**()

#### Inherited from

[Loader](abstract_loader.loader.md).[constructor](abstract_loader.loader.md#constructor)

## Properties

### itemType

• **itemType**: [`Album`](../enums/abstract_spotifyitem.spotifyitemtype.md#album)

The item type this loads.

#### Overrides

[Loader](abstract_loader.loader.md).[itemType](abstract_loader.loader.md#itemtype)

#### Defined in

[item/SpotifyAlbumLoader.ts:10](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyAlbumLoader.ts#L10)

___

### matchers

• **matchers**: `RegExp`[]

The regex patterns used for identifying different types of spotify urls.

#### Overrides

[Loader](abstract_loader.loader.md).[matchers](abstract_loader.loader.md#matchers)

#### Defined in

[item/SpotifyAlbumLoader.ts:15](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyAlbumLoader.ts#L15)

## Methods

### load

▸ **load**(`manager`, `__namedParameters`): `Promise`<[`SpotifyAlbum`](item_spotifyalbum.spotifyalbum.md)\>

Loads an album from the spotify api.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager` | [`SpotifyManager`](spotifymanager.spotifymanager-1.md) | The SpotifyManager instance. |
| `__namedParameters` | `RegExpExecArray` | - |

#### Returns

`Promise`<[`SpotifyAlbum`](item_spotifyalbum.spotifyalbum.md)\>

#### Overrides

[Loader](abstract_loader.loader.md).[load](abstract_loader.loader.md#load)

#### Defined in

[item/SpotifyAlbumLoader.ts:50](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyAlbumLoader.ts#L50)

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

▸ `Static` `Private` **loadTracks**(`manager`, `album`): `Promise`<[`SpotifyTrack`](item_spotifytrack.spotifytrack.md)[]\>

Loads all tracks within the provided album.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager` | [`SpotifyManager`](spotifymanager.spotifymanager-1.md) | The SpotifyManager instance. |
| `album` | [`Album`](../interfaces/spotify.spotify-1.album.md) | The album object. |

#### Returns

`Promise`<[`SpotifyTrack`](item_spotifytrack.spotifytrack.md)[]\>

#### Defined in

[item/SpotifyAlbumLoader.ts:23](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyAlbumLoader.ts#L23)
