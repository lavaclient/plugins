[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [item/SpotifyTrackLoader](../modules/item_spotifytrackloader.md) / SpotifyTrackLoader

# Class: SpotifyTrackLoader

[item/SpotifyTrackLoader](../modules/item_spotifytrackloader.md).SpotifyTrackLoader

## Hierarchy

- [`Loader`](abstract_loader.loader.md)

  ↳ **`SpotifyTrackLoader`**

## Table of contents

### Constructors

- [constructor](item_spotifytrackloader.spotifytrackloader.md#constructor)

### Properties

- [itemType](item_spotifytrackloader.spotifytrackloader.md#itemtype)
- [matchers](item_spotifytrackloader.spotifytrackloader.md#matchers)

### Methods

- [load](item_spotifytrackloader.spotifytrackloader.md#load)
- [match](item_spotifytrackloader.spotifytrackloader.md#match)

## Constructors

### constructor

• **new SpotifyTrackLoader**()

#### Inherited from

[Loader](abstract_loader.loader.md).[constructor](abstract_loader.loader.md#constructor)

## Properties

### itemType

• **itemType**: [`Track`](../enums/abstract_spotifyitem.spotifyitemtype.md#track)

The item type this loads.

#### Overrides

[Loader](abstract_loader.loader.md).[itemType](abstract_loader.loader.md#itemtype)

#### Defined in

[item/SpotifyTrackLoader.ts:10](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyTrackLoader.ts#L10)

___

### matchers

• **matchers**: `RegExp`[]

The regex patterns used for identifying different types of spotify urls.

#### Overrides

[Loader](abstract_loader.loader.md).[matchers](abstract_loader.loader.md#matchers)

#### Defined in

[item/SpotifyTrackLoader.ts:15](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyTrackLoader.ts#L15)

## Methods

### load

▸ **load**(`manager`, `__namedParameters`): `Promise`<[`SpotifyTrack`](item_spotifytrack.spotifytrack.md)\>

Loads a SpotifyTrack from the spotify api.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager` | [`SpotifyManager`](spotifymanager.spotifymanager-1.md) | The SpotifyManager instance. |
| `__namedParameters` | `RegExpExecArray` | - |

#### Returns

`Promise`<[`SpotifyTrack`](item_spotifytrack.spotifytrack.md)\>

The fetched track.

#### Overrides

[Loader](abstract_loader.loader.md).[load](abstract_loader.loader.md#load)

#### Defined in

[item/SpotifyTrackLoader.ts:26](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyTrackLoader.ts#L26)

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
