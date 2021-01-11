[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / SpotifyPlaylist

# Class: SpotifyPlaylist

[index](../modules/index.md).SpotifyPlaylist

## Hierarchy

* [*SpotifyItem*](abstract/spotifyitem.spotifyitem.md)

  ↳ **SpotifyPlaylist**

## Table of contents

### Constructors

- [constructor](index.spotifyplaylist.md#constructor)

### Properties

- [data](index.spotifyplaylist.md#data)
- [manager](index.spotifyplaylist.md#manager)
- [tracks](index.spotifyplaylist.md#tracks)
- [type](index.spotifyplaylist.md#type)

### Accessors

- [artwork](index.spotifyplaylist.md#artwork)
- [name](index.spotifyplaylist.md#name)
- [owner](index.spotifyplaylist.md#owner)

## Constructors

### constructor

\+ **new SpotifyPlaylist**(`manager`: [*SpotifyManager*](spotifymanager.spotifymanager-1.md), `album`: [*Playlist*](../interfaces/spotify.spotify.playlist.md), `tracks`: [*SpotifyTrack*](item/spotifytrack.spotifytrack.md)[]): [*SpotifyPlaylist*](item/spotifyplaylist.spotifyplaylist.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`manager` | [*SpotifyManager*](spotifymanager.spotifymanager-1.md) | The spotify manager.   |
`album` | [*Playlist*](../interfaces/spotify.spotify.playlist.md) |  |
`tracks` | [*SpotifyTrack*](item/spotifytrack.spotifytrack.md)[] |     |

**Returns:** [*SpotifyPlaylist*](item/spotifyplaylist.spotifyplaylist.md)

Inherited from: [SpotifyItem](abstract/spotifyitem.spotifyitem.md)

Defined in: [item/SpotifyPlaylist.ts:19](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyPlaylist.ts#L19)

## Properties

### data

• `Readonly` **data**: [*Playlist*](../interfaces/spotify.spotify.playlist.md)

The playlist data.

Defined in: [item/SpotifyPlaylist.ts:13](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyPlaylist.ts#L13)

___

### manager

• `Readonly` **manager**: [*SpotifyManager*](spotifymanager.spotifymanager-1.md)

The spotify manager.

Inherited from: [SpotifyItem](abstract/spotifyitem.spotifyitem.md).[manager](abstract/spotifyitem.spotifyitem.md#manager)

Defined in: [abstract/SpotifyItem.ts:7](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/abstract/SpotifyItem.ts#L7)

___

### tracks

• `Private` `Readonly` **tracks**: [*SpotifyTrack*](item/spotifytrack.spotifytrack.md)[]

The spotify tracks of this playlist.

Defined in: [item/SpotifyPlaylist.ts:19](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyPlaylist.ts#L19)

___

### type

• `Readonly` **type**: *playlist*= "playlist"

Overrides: [SpotifyItem](abstract/spotifyitem.spotifyitem.md).[type](abstract/spotifyitem.spotifyitem.md#type)

Defined in: [item/SpotifyPlaylist.ts:8](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyPlaylist.ts#L8)

## Accessors

### artwork

• **artwork**(): *string*

The artwork for this playlist.

**Returns:** *string*

Defined in: [item/SpotifyPlaylist.ts:50](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyPlaylist.ts#L50)

___

### name

• **name**(): *string*

The name of this track.

**Returns:** *string*

Defined in: [item/SpotifyPlaylist.ts:36](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyPlaylist.ts#L36)

___

### owner

• **owner**(): [*User*](../interfaces/spotify.spotify.user.md)

The owner of this playlist.

**Returns:** [*User*](../interfaces/spotify.spotify.user.md)

Defined in: [item/SpotifyPlaylist.ts:43](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyPlaylist.ts#L43)
