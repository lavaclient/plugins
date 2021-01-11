[@lavaclient/spotify](../../README.md) / [Exports](../../modules.md) / [item/SpotifyPlaylist](../../modules/item_spotifyplaylist.md) / SpotifyPlaylist

# Class: SpotifyPlaylist

[item/SpotifyPlaylist](../../modules/item_spotifyplaylist.md).SpotifyPlaylist

## Hierarchy

* [*SpotifyItem*](../abstract/spotifyitem.spotifyitem.md)

  ↳ **SpotifyPlaylist**

## Table of contents

### Constructors

- [constructor](spotifyplaylist.spotifyplaylist.md#constructor)

### Properties

- [data](spotifyplaylist.spotifyplaylist.md#data)
- [manager](spotifyplaylist.spotifyplaylist.md#manager)
- [tracks](spotifyplaylist.spotifyplaylist.md#tracks)
- [type](spotifyplaylist.spotifyplaylist.md#type)

### Accessors

- [artwork](spotifyplaylist.spotifyplaylist.md#artwork)
- [name](spotifyplaylist.spotifyplaylist.md#name)
- [owner](spotifyplaylist.spotifyplaylist.md#owner)

## Constructors

### constructor

\+ **new SpotifyPlaylist**(`manager`: [*SpotifyManager*](../spotifymanager.spotifymanager-1.md), `album`: [*Playlist*](../../interfaces/spotify.spotify.playlist.md), `tracks`: [*SpotifyTrack*](spotifytrack.spotifytrack.md)[]): [*SpotifyPlaylist*](spotifyplaylist.spotifyplaylist.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`manager` | [*SpotifyManager*](../spotifymanager.spotifymanager-1.md) | The spotify manager.   |
`album` | [*Playlist*](../../interfaces/spotify.spotify.playlist.md) |  |
`tracks` | [*SpotifyTrack*](spotifytrack.spotifytrack.md)[] |     |

**Returns:** [*SpotifyPlaylist*](spotifyplaylist.spotifyplaylist.md)

Inherited from: [SpotifyItem](../abstract/spotifyitem.spotifyitem.md)

Defined in: [item/SpotifyPlaylist.ts:19](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyPlaylist.ts#L19)

## Properties

### data

• `Readonly` **data**: [*Playlist*](../../interfaces/spotify.spotify.playlist.md)

The playlist data.

Defined in: [item/SpotifyPlaylist.ts:13](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyPlaylist.ts#L13)

___

### manager

• `Readonly` **manager**: [*SpotifyManager*](../spotifymanager.spotifymanager-1.md)

The spotify manager.

Inherited from: [SpotifyItem](../abstract/spotifyitem.spotifyitem.md).[manager](../abstract/spotifyitem.spotifyitem.md#manager)

Defined in: [abstract/SpotifyItem.ts:7](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/abstract/SpotifyItem.ts#L7)

___

### tracks

• `Private` `Readonly` **tracks**: [*SpotifyTrack*](spotifytrack.spotifytrack.md)[]

The spotify tracks of this playlist.

Defined in: [item/SpotifyPlaylist.ts:19](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyPlaylist.ts#L19)

___

### type

• `Readonly` **type**: *playlist*= "playlist"

Overrides: [SpotifyItem](../abstract/spotifyitem.spotifyitem.md).[type](../abstract/spotifyitem.spotifyitem.md#type)

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

• **owner**(): [*User*](../../interfaces/spotify.spotify.user.md)

The owner of this playlist.

**Returns:** [*User*](../../interfaces/spotify.spotify.user.md)

Defined in: [item/SpotifyPlaylist.ts:43](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyPlaylist.ts#L43)
