[@lavaclient/spotify](../../README.md) / [Exports](../../modules.md) / [abstract/Loader](../../modules/abstract_loader.md) / Loader

# Class: Loader

[abstract/Loader](../../modules/abstract_loader.md).Loader

## Hierarchy

* **Loader**

  ↳ [*SpotifyAlbumLoader*](../item/spotifyalbumloader.spotifyalbumloader.md)

  ↳ [*SpotifyPlaylistLoader*](../item/spotifyplaylistloader.spotifyplaylistloader.md)

  ↳ [*SpotifyTrackLoader*](../item/spotifytrackloader.spotifytrackloader.md)

## Table of contents

### Constructors

- [constructor](loader.loader.md#constructor)

### Properties

- [itemType](loader.loader.md#itemtype)
- [matchers](loader.loader.md#matchers)

### Methods

- [load](loader.loader.md#load)
- [match](loader.loader.md#match)

## Constructors

### constructor

\+ **new Loader**(): [*Loader*](loader.loader.md)

**Returns:** [*Loader*](loader.loader.md)

## Properties

### itemType

• `Abstract` **itemType**: [*SpotifyItemType*](../../modules/abstract_spotifyitem.md#spotifyitemtype)

The item type this loads.

Defined in: [abstract/Loader.ts:11](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/abstract/Loader.ts#L11)

___

### matchers

• `Abstract` **matchers**: *RegExp*[]

The regex(es) used for matching urls.

Defined in: [abstract/Loader.ts:16](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/abstract/Loader.ts#L16)

## Methods

### load

▸ `Abstract`**load**(`manager`: [*SpotifyManager*](../spotifymanager.spotifymanager-1.md), `execArray`: *RegExpExecArray*): *Promise*<[*Item*](../../modules/abstract_loader.md#item)\>

Used for loading spotify items.

#### Parameters:

Name | Type |
------ | ------ |
`manager` | [*SpotifyManager*](../spotifymanager.spotifymanager-1.md) |
`execArray` | *RegExpExecArray* |

**Returns:** *Promise*<[*Item*](../../modules/abstract_loader.md#item)\>

A spotify item (album, playlist, or track)

Defined in: [abstract/Loader.ts:22](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/abstract/Loader.ts#L22)

___

### match

▸ **match**(`identifier`: *string*): *null* \| *RegExpExecArray*

Used for finding this loader.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`identifier` | *string* | The identifier to test.    |

**Returns:** *null* \| *RegExpExecArray*

Defined in: [abstract/Loader.ts:29](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/abstract/Loader.ts#L29)
