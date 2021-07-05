[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [abstract/Loader](../modules/abstract_loader.md) / Loader

# Class: Loader

[abstract/Loader](../modules/abstract_loader.md).Loader

## Hierarchy

- **`Loader`**

  ↳ [`SpotifyAlbumLoader`](item_spotifyalbumloader.spotifyalbumloader.md)

  ↳ [`SpotifyArtistLoader`](item_spotifyartistloader.spotifyartistloader.md)

  ↳ [`SpotifyPlaylistLoader`](item_spotifyplaylistloader.spotifyplaylistloader.md)

  ↳ [`SpotifyTrackLoader`](item_spotifytrackloader.spotifytrackloader.md)

## Table of contents

### Constructors

- [constructor](abstract_loader.loader.md#constructor)

### Properties

- [itemType](abstract_loader.loader.md#itemtype)
- [matchers](abstract_loader.loader.md#matchers)

### Methods

- [load](abstract_loader.loader.md#load)
- [match](abstract_loader.loader.md#match)

## Constructors

### constructor

• **new Loader**()

## Properties

### itemType

• `Abstract` **itemType**: [`SpotifyItemType`](../enums/abstract_spotifyitem.spotifyitemtype.md)

The item type this loads.

#### Defined in

[abstract/Loader.ts:13](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/abstract/Loader.ts#L13)

___

### matchers

• `Abstract` **matchers**: `RegExp`[]

The regex(es) used for matching urls.

#### Defined in

[abstract/Loader.ts:18](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/abstract/Loader.ts#L18)

## Methods

### load

▸ `Abstract` **load**(`manager`, `execArray`): `Promise`<[`Item`](../modules/abstract_loader.md#item)\>

Used for loading spotify items.

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`SpotifyManager`](spotifymanager.spotifymanager-1.md) |
| `execArray` | `RegExpExecArray` |

#### Returns

`Promise`<[`Item`](../modules/abstract_loader.md#item)\>

A spotify item (album, playlist, or track)

#### Defined in

[abstract/Loader.ts:24](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/abstract/Loader.ts#L24)

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

#### Defined in

[abstract/Loader.ts:31](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/abstract/Loader.ts#L31)
