[@lavaclient/spotify](../../README.md) / [Exports](../../modules.md) / [item/SpotifyPlaylistLoader](../../modules/item_spotifyplaylistloader.md) / SpotifyPlaylistLoader

# Class: SpotifyPlaylistLoader

[item/SpotifyPlaylistLoader](../../modules/item_spotifyplaylistloader.md).SpotifyPlaylistLoader

## Hierarchy

* [*Loader*](../abstract/loader.loader.md)

  ↳ **SpotifyPlaylistLoader**

## Table of contents

### Constructors

- [constructor](spotifyplaylistloader.spotifyplaylistloader.md#constructor)

### Properties

- [itemType](spotifyplaylistloader.spotifyplaylistloader.md#itemtype)
- [matchers](spotifyplaylistloader.spotifyplaylistloader.md#matchers)

### Methods

- [load](spotifyplaylistloader.spotifyplaylistloader.md#load)
- [match](spotifyplaylistloader.spotifyplaylistloader.md#match)
- [loadTracks](spotifyplaylistloader.spotifyplaylistloader.md#loadtracks)

## Constructors

### constructor

\+ **new SpotifyPlaylistLoader**(): [*SpotifyPlaylistLoader*](spotifyplaylistloader.spotifyplaylistloader.md)

**Returns:** [*SpotifyPlaylistLoader*](spotifyplaylistloader.spotifyplaylistloader.md)

Inherited from: [Loader](../abstract/loader.loader.md)

## Properties

### itemType

• **itemType**: *playlist*= "playlist"

Overrides: [Loader](../abstract/loader.loader.md).[itemType](../abstract/loader.loader.md#itemtype)

Defined in: [item/SpotifyPlaylistLoader.ts:11](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyPlaylistLoader.ts#L11)

___

### matchers

• **matchers**: *RegExp*[]

The regex patterns used for identifying different types of spotify urls.

Overrides: [Loader](../abstract/loader.loader.md).[matchers](../abstract/loader.loader.md#matchers)

Defined in: [item/SpotifyPlaylistLoader.ts:16](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyPlaylistLoader.ts#L16)

## Methods

### load

▸ **load**(`manager`: [*SpotifyManager*](../spotifymanager.spotifymanager-1.md), `__namedParameters`: *RegExpExecArray*): *Promise*<[*SpotifyPlaylist*](spotifyplaylist.spotifyplaylist.md)\>

Loads a playlist from the spotify api.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`manager` | [*SpotifyManager*](../spotifymanager.spotifymanager-1.md) | The SpotifyManager instance.   |
`__namedParameters` | *RegExpExecArray* | - |

**Returns:** *Promise*<[*SpotifyPlaylist*](spotifyplaylist.spotifyplaylist.md)\>

Overrides: [Loader](../abstract/loader.loader.md)

Defined in: [item/SpotifyPlaylistLoader.ts:27](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyPlaylistLoader.ts#L27)

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

▸ `Private` `Static`**loadTracks**(`manager`: [*SpotifyManager*](../spotifymanager.spotifymanager-1.md), `playlist`: [*Playlist*](../../interfaces/spotify.spotify.playlist.md)): *Promise*<[*SpotifyTrack*](spotifytrack.spotifytrack.md)[]\>

Loads all tracks within a playlist.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`manager` | [*SpotifyManager*](../spotifymanager.spotifymanager-1.md) | The SpotifyManager instance.   |
`playlist` | [*Playlist*](../../interfaces/spotify.spotify.playlist.md) | The playlist object.    |

**Returns:** *Promise*<[*SpotifyTrack*](spotifytrack.spotifytrack.md)[]\>

Defined in: [item/SpotifyPlaylistLoader.ts:38](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyPlaylistLoader.ts#L38)
