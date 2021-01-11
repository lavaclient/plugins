[@lavaclient/spotify](../../README.md) / [Exports](../../modules.md) / [item/SpotifyAlbum](../../modules/item_spotifyalbum.md) / SpotifyAlbum

# Class: SpotifyAlbum

[item/SpotifyAlbum](../../modules/item_spotifyalbum.md).SpotifyAlbum

## Hierarchy

* [*SpotifyItem*](../abstract/spotifyitem.spotifyitem.md)

  ↳ **SpotifyAlbum**

## Table of contents

### Constructors

- [constructor](spotifyalbum.spotifyalbum.md#constructor)

### Properties

- [data](spotifyalbum.spotifyalbum.md#data)
- [manager](spotifyalbum.spotifyalbum.md#manager)
- [tracks](spotifyalbum.spotifyalbum.md#tracks)
- [type](spotifyalbum.spotifyalbum.md#type)

### Accessors

- [artists](spotifyalbum.spotifyalbum.md#artists)
- [artwork](spotifyalbum.spotifyalbum.md#artwork)
- [name](spotifyalbum.spotifyalbum.md#name)

### Methods

- [convertTracks](spotifyalbum.spotifyalbum.md#converttracks)

## Constructors

### constructor

\+ **new SpotifyAlbum**(`manager`: [*SpotifyManager*](../spotifymanager.spotifymanager-1.md), `album`: [*Album*](../../interfaces/spotify.spotify.album.md), `tracks`: [*SpotifyTrack*](spotifytrack.spotifytrack.md)[]): [*SpotifyAlbum*](spotifyalbum.spotifyalbum.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`manager` | [*SpotifyManager*](../spotifymanager.spotifymanager-1.md) | The spotify manager.   |
`album` | [*Album*](../../interfaces/spotify.spotify.album.md) |  |
`tracks` | [*SpotifyTrack*](spotifytrack.spotifytrack.md)[] |     |

**Returns:** [*SpotifyAlbum*](spotifyalbum.spotifyalbum.md)

Inherited from: [SpotifyItem](../abstract/spotifyitem.spotifyitem.md)

Defined in: [item/SpotifyAlbum.ts:19](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyAlbum.ts#L19)

## Properties

### data

• **data**: [*Album*](../../interfaces/spotify.spotify.album.md)

The album data.

Defined in: [item/SpotifyAlbum.ts:13](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyAlbum.ts#L13)

___

### manager

• `Readonly` **manager**: [*SpotifyManager*](../spotifymanager.spotifymanager-1.md)

The spotify manager.

Inherited from: [SpotifyItem](../abstract/spotifyitem.spotifyitem.md).[manager](../abstract/spotifyitem.spotifyitem.md#manager)

Defined in: [abstract/SpotifyItem.ts:7](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/abstract/SpotifyItem.ts#L7)

___

### tracks

• `Private` `Readonly` **tracks**: [*SpotifyTrack*](spotifytrack.spotifytrack.md)[]

The spotify tracks of this album.

Defined in: [item/SpotifyAlbum.ts:19](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyAlbum.ts#L19)

___

### type

• `Readonly` **type**: *album*= "album"

Overrides: [SpotifyItem](../abstract/spotifyitem.spotifyitem.md).[type](../abstract/spotifyitem.spotifyitem.md#type)

Defined in: [item/SpotifyAlbum.ts:8](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyAlbum.ts#L8)

## Accessors

### artists

• **artists**(): [*Artist*](../../interfaces/spotify.spotify.artist.md)[]

The artists that made this track.

**Returns:** [*Artist*](../../interfaces/spotify.spotify.artist.md)[]

Defined in: [item/SpotifyAlbum.ts:52](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyAlbum.ts#L52)

___

### artwork

• **artwork**(): *null* \| *string*

The artwork for this track.

**Returns:** *null* \| *string*

Defined in: [item/SpotifyAlbum.ts:59](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyAlbum.ts#L59)

___

### name

• **name**(): *string*

The name of this track.

**Returns:** *string*

Defined in: [item/SpotifyAlbum.ts:45](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyAlbum.ts#L45)

## Methods

### convertTracks

▸ `Static`**convertTracks**(`manager`: [*SpotifyManager*](../spotifymanager.spotifymanager-1.md), `tracks`: [*Track*](../../interfaces/spotify.spotify.track.md)[]): [*SpotifyTrack*](spotifytrack.spotifytrack.md)[]

Converts raw tracks into SpotifyTracks

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`manager` | [*SpotifyManager*](../spotifymanager.spotifymanager-1.md) |  |
`tracks` | [*Track*](../../interfaces/spotify.spotify.track.md)[] |     |

**Returns:** [*SpotifyTrack*](spotifytrack.spotifytrack.md)[]

Defined in: [item/SpotifyAlbum.ts:38](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyAlbum.ts#L38)
