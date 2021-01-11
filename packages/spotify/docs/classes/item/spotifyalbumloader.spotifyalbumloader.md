[@lavaclient/spotify](../../README.md) / [Exports](../../modules.md) / [item/SpotifyAlbumLoader](../../modules/item_spotifyalbumloader.md) / SpotifyAlbumLoader

# Class: SpotifyAlbumLoader

[item/SpotifyAlbumLoader](../../modules/item_spotifyalbumloader.md).SpotifyAlbumLoader

## Hierarchy

* [*Loader*](../abstract/loader.loader.md)

  ↳ **SpotifyAlbumLoader**

## Table of contents

### Constructors

- [constructor](spotifyalbumloader.spotifyalbumloader.md#constructor)

### Properties

- [itemType](spotifyalbumloader.spotifyalbumloader.md#itemtype)
- [matchers](spotifyalbumloader.spotifyalbumloader.md#matchers)

### Methods

- [load](spotifyalbumloader.spotifyalbumloader.md#load)
- [match](spotifyalbumloader.spotifyalbumloader.md#match)
- [loadTracks](spotifyalbumloader.spotifyalbumloader.md#loadtracks)

## Constructors

### constructor

\+ **new SpotifyAlbumLoader**(): [*SpotifyAlbumLoader*](spotifyalbumloader.spotifyalbumloader.md)

**Returns:** [*SpotifyAlbumLoader*](spotifyalbumloader.spotifyalbumloader.md)

Inherited from: [Loader](../abstract/loader.loader.md)

## Properties

### itemType

• **itemType**: *album*= "album"

Overrides: [Loader](../abstract/loader.loader.md).[itemType](../abstract/loader.loader.md#itemtype)

Defined in: [item/SpotifyAlbumLoader.ts:9](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyAlbumLoader.ts#L9)

___

### matchers

• **matchers**: *RegExp*[]

The regex patterns used for identifying different types of spotify urls.

Overrides: [Loader](../abstract/loader.loader.md).[matchers](../abstract/loader.loader.md#matchers)

Defined in: [item/SpotifyAlbumLoader.ts:14](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyAlbumLoader.ts#L14)

## Methods

### load

▸ **load**(`manager`: [*SpotifyManager*](../spotifymanager.spotifymanager-1.md), `__namedParameters`: *RegExpExecArray*): *Promise*<[*SpotifyAlbum*](spotifyalbum.spotifyalbum.md)\>

Loads an album from the spotify api.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`manager` | [*SpotifyManager*](../spotifymanager.spotifymanager-1.md) | The SpotifyManager instance.   |
`__namedParameters` | *RegExpExecArray* | - |

**Returns:** *Promise*<[*SpotifyAlbum*](spotifyalbum.spotifyalbum.md)\>

Overrides: [Loader](../abstract/loader.loader.md)

Defined in: [item/SpotifyAlbumLoader.ts:22](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyAlbumLoader.ts#L22)

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

___

### loadTracks

▸ `Private` `Static`**loadTracks**(`manager`: [*SpotifyManager*](../spotifymanager.spotifymanager-1.md), `album`: [*Album*](../../interfaces/spotify.spotify.album.md)): *Promise*<[*SpotifyTrack*](spotifytrack.spotifytrack.md)[]\>

Loads all tracks within the provided album.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`manager` | [*SpotifyManager*](../spotifymanager.spotifymanager-1.md) | The SpotifyManager instance.   |
`album` | [*Album*](../../interfaces/spotify.spotify.album.md) | The album object.    |

**Returns:** *Promise*<[*SpotifyTrack*](spotifytrack.spotifytrack.md)[]\>

Defined in: [item/SpotifyAlbumLoader.ts:33](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyAlbumLoader.ts#L33)
