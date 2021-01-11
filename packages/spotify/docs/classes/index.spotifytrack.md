[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / SpotifyTrack

# Class: SpotifyTrack

[index](../modules/index.md).SpotifyTrack

## Hierarchy

* [*SpotifyItem*](abstract/spotifyitem.spotifyitem.md)

  ↳ **SpotifyTrack**

## Table of contents

### Constructors

- [constructor](index.spotifytrack.md#constructor)

### Properties

- [#track](index.spotifytrack.md##track)
- [data](index.spotifytrack.md#data)
- [manager](index.spotifytrack.md#manager)
- [type](index.spotifytrack.md#type)

### Accessors

- [album](index.spotifytrack.md#album)
- [artists](index.spotifytrack.md#artists)
- [artwork](index.spotifytrack.md#artwork)
- [name](index.spotifytrack.md#name)

### Methods

- [resolveLavalinkTrack](index.spotifytrack.md#resolvelavalinktrack)

## Constructors

### constructor

\+ **new SpotifyTrack**(`manager`: [*SpotifyManager*](spotifymanager.spotifymanager-1.md), `track`: [*Track*](../interfaces/spotify.spotify.track.md)): [*SpotifyTrack*](item/spotifytrack.spotifytrack.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`manager` | [*SpotifyManager*](spotifymanager.spotifymanager-1.md) | The spotify manager.   |
`track` | [*Track*](../interfaces/spotify.spotify.track.md) | The spotify track data.    |

**Returns:** [*SpotifyTrack*](item/spotifytrack.spotifytrack.md)

Inherited from: [SpotifyItem](abstract/spotifyitem.spotifyitem.md)

Defined in: [item/SpotifyTrack.ts:19](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyTrack.ts#L19)

## Properties

### #track

• `Private` **#track**: *null* \| Track= null

The lavalink track.

Defined in: [item/SpotifyTrack.ts:19](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyTrack.ts#L19)

___

### data

• **data**: [*Track*](../interfaces/spotify.spotify.track.md)

The spotify track data.

Defined in: [item/SpotifyTrack.ts:13](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyTrack.ts#L13)

___

### manager

• `Readonly` **manager**: [*SpotifyManager*](spotifymanager.spotifymanager-1.md)

The spotify manager.

Inherited from: [SpotifyItem](abstract/spotifyitem.spotifyitem.md).[manager](abstract/spotifyitem.spotifyitem.md#manager)

Defined in: [abstract/SpotifyItem.ts:7](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/abstract/SpotifyItem.ts#L7)

___

### type

• **type**: *track*= "track"

Overrides: [SpotifyItem](abstract/spotifyitem.spotifyitem.md).[type](abstract/spotifyitem.spotifyitem.md#type)

Defined in: [item/SpotifyTrack.ts:8](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyTrack.ts#L8)

## Accessors

### album

• **album**(): [*Album*](../interfaces/spotify.spotify.album.md)

The album data for this track.

**Returns:** [*Album*](../interfaces/spotify.spotify.album.md)

Defined in: [item/SpotifyTrack.ts:48](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyTrack.ts#L48)

___

### artists

• **artists**(): [*Artist*](../interfaces/spotify.spotify.artist.md)[]

The artists that made this track.

**Returns:** [*Artist*](../interfaces/spotify.spotify.artist.md)[]

Defined in: [item/SpotifyTrack.ts:41](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyTrack.ts#L41)

___

### artwork

• **artwork**(): *string*

The artwork for this track.

**Returns:** *string*

Defined in: [item/SpotifyTrack.ts:56](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyTrack.ts#L56)

___

### name

• **name**(): *string*

The name of this track.

**Returns:** *string*

Defined in: [item/SpotifyTrack.ts:34](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyTrack.ts#L34)

## Methods

### resolveLavalinkTrack

▸ **resolveLavalinkTrack**(): *Promise*<Track\>

Resolves the lavalink track.

**Returns:** *Promise*<Track\>

Defined in: [item/SpotifyTrack.ts:68](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/item/SpotifyTrack.ts#L68)
