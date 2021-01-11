[@lavaclient/spotify](../../README.md) / [Exports](../../modules.md) / [item/SpotifyTrackLoader](../../modules/item_spotifytrackloader.md) / SpotifyTrackLoader

# Class: SpotifyTrackLoader

[item/SpotifyTrackLoader](../../modules/item_spotifytrackloader.md).SpotifyTrackLoader

## Hierarchy

* [*Loader*](../abstract/loader.loader.md)

  ↳ **SpotifyTrackLoader**

## Table of contents

### Constructors

- [constructor](spotifytrackloader.spotifytrackloader.md#constructor)

### Properties

- [itemType](spotifytrackloader.spotifytrackloader.md#itemtype)
- [matchers](spotifytrackloader.spotifytrackloader.md#matchers)

### Methods

- [load](spotifytrackloader.spotifytrackloader.md#load)
- [match](spotifytrackloader.spotifytrackloader.md#match)

## Constructors

### constructor

\+ **new SpotifyTrackLoader**(): [*SpotifyTrackLoader*](spotifytrackloader.spotifytrackloader.md)

**Returns:** [*SpotifyTrackLoader*](spotifytrackloader.spotifytrackloader.md)

Inherited from: [Loader](../abstract/loader.loader.md)

## Properties

### itemType

• **itemType**: *track*= "track"

Overrides: [Loader](../abstract/loader.loader.md).[itemType](../abstract/loader.loader.md#itemtype)

Defined in: [item/SpotifyTrackLoader.ts:8](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyTrackLoader.ts#L8)

___

### matchers

• **matchers**: *RegExp*[]

The regex patterns used for identifying different types of spotify urls.

Overrides: [Loader](../abstract/loader.loader.md).[matchers](../abstract/loader.loader.md#matchers)

Defined in: [item/SpotifyTrackLoader.ts:13](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyTrackLoader.ts#L13)

## Methods

### load

▸ **load**(`manager`: [*SpotifyManager*](../spotifymanager.spotifymanager-1.md), `__namedParameters`: *RegExpExecArray*): *Promise*<[*SpotifyTrack*](spotifytrack.spotifytrack.md)\>

Loads a SpotifyTrack from the spotify api.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`manager` | [*SpotifyManager*](../spotifymanager.spotifymanager-1.md) | The SpotifyManager instance.   |
`__namedParameters` | *RegExpExecArray* | - |

**Returns:** *Promise*<[*SpotifyTrack*](spotifytrack.spotifytrack.md)\>

The fetched track.

Overrides: [Loader](../abstract/loader.loader.md)

Defined in: [item/SpotifyTrackLoader.ts:24](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyTrackLoader.ts#L24)

___

### match

▸ **match**(`identifier`: *string*): *null* \| *RegExpExecArray*

Used for finding this loader.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`identifier` | *string* | The identifier to test.    |

**Returns:** *null* \| *RegExpExecArray*

Inherited from: [Loader](../abstract/loader.loader.md)

Defined in: [abstract/Loader.ts:29](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/abstract/Loader.ts#L29)
