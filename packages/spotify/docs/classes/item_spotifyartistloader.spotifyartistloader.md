[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [item/SpotifyArtistLoader](../modules/item_spotifyartistloader.md) / SpotifyArtistLoader

# Class: SpotifyArtistLoader

[item/SpotifyArtistLoader](../modules/item_spotifyartistloader.md).SpotifyArtistLoader

## Hierarchy

- [`Loader`](abstract_loader.loader.md)

  ↳ **`SpotifyArtistLoader`**

## Table of contents

### Constructors

- [constructor](item_spotifyartistloader.spotifyartistloader.md#constructor)

### Properties

- [itemType](item_spotifyartistloader.spotifyartistloader.md#itemtype)
- [matchers](item_spotifyartistloader.spotifyartistloader.md#matchers)

### Methods

- [load](item_spotifyartistloader.spotifyartistloader.md#load)
- [match](item_spotifyartistloader.spotifyartistloader.md#match)

## Constructors

### constructor

• **new SpotifyArtistLoader**()

#### Inherited from

[Loader](abstract_loader.loader.md).[constructor](abstract_loader.loader.md#constructor)

## Properties

### itemType

• **itemType**: [`SpotifyItemType`](../enums/abstract_spotifyitem.spotifyitemtype.md)

The item type this loads.

#### Overrides

[Loader](abstract_loader.loader.md).[itemType](abstract_loader.loader.md#itemtype)

#### Defined in

[item/SpotifyArtistLoader.ts:10](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyArtistLoader.ts#L10)

___

### matchers

• **matchers**: `RegExp`[]

The regex patterns for identifying different variations of a artist url.

#### Overrides

[Loader](abstract_loader.loader.md).[matchers](abstract_loader.loader.md#matchers)

#### Defined in

[item/SpotifyArtistLoader.ts:15](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyArtistLoader.ts#L15)

## Methods

### load

▸ **load**(`manager`, `__namedParameters`): `Promise`<[`SpotifyArtist`](item_spotifyartist.spotifyartist.md)\>

Loads a playlist from the Spotify API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager` | [`SpotifyManager`](spotifymanager.spotifymanager-1.md) | The spotify manager. |
| `__namedParameters` | `RegExpExecArray` | - |

#### Returns

`Promise`<[`SpotifyArtist`](item_spotifyartist.spotifyartist.md)\>

#### Overrides

[Loader](abstract_loader.loader.md).[load](abstract_loader.loader.md#load)

#### Defined in

[item/SpotifyArtistLoader.ts:23](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyArtistLoader.ts#L23)

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
