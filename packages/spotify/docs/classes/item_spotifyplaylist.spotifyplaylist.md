[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [item/SpotifyPlaylist](../modules/item_spotifyplaylist.md) / SpotifyPlaylist

# Class: SpotifyPlaylist

[item/SpotifyPlaylist](../modules/item_spotifyplaylist.md).SpotifyPlaylist

## Hierarchy

- [`SpotifyItem`](abstract_spotifyitem.spotifyitem.md)

  ↳ **`SpotifyPlaylist`**

## Table of contents

### Constructors

- [constructor](item_spotifyplaylist.spotifyplaylist.md#constructor)

### Properties

- [data](item_spotifyplaylist.spotifyplaylist.md#data)
- [manager](item_spotifyplaylist.spotifyplaylist.md#manager)
- [tracks](item_spotifyplaylist.spotifyplaylist.md#tracks)
- [type](item_spotifyplaylist.spotifyplaylist.md#type)

### Accessors

- [artwork](item_spotifyplaylist.spotifyplaylist.md#artwork)
- [name](item_spotifyplaylist.spotifyplaylist.md#name)
- [owner](item_spotifyplaylist.spotifyplaylist.md#owner)

### Methods

- [resolveAllTracks](item_spotifyplaylist.spotifyplaylist.md#resolvealltracks)

## Constructors

### constructor

• **new SpotifyPlaylist**(`manager`, `album`, `tracks`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager` | [`SpotifyManager`](spotifymanager.spotifymanager-1.md) | The spotify manager. |
| `album` | [`Playlist`](../interfaces/spotify.spotify-1.playlist.md) |  |
| `tracks` | [`SpotifyTrack`](item_spotifytrack.spotifytrack.md)[] |  |

#### Overrides

[SpotifyItem](abstract_spotifyitem.spotifyitem.md).[constructor](abstract_spotifyitem.spotifyitem.md#constructor)

#### Defined in

[item/SpotifyPlaylist.ts:20](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyPlaylist.ts#L20)

## Properties

### data

• `Readonly` **data**: [`Playlist`](../interfaces/spotify.spotify-1.playlist.md)

The playlist data.

#### Defined in

[item/SpotifyPlaylist.ts:14](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyPlaylist.ts#L14)

___

### manager

• `Readonly` **manager**: [`SpotifyManager`](spotifymanager.spotifymanager-1.md)

The spotify manager.

#### Inherited from

[SpotifyItem](abstract_spotifyitem.spotifyitem.md).[manager](abstract_spotifyitem.spotifyitem.md#manager)

#### Defined in

[abstract/SpotifyItem.ts:7](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/abstract/SpotifyItem.ts#L7)

___

### tracks

• `Readonly` `Private` **tracks**: [`SpotifyTrack`](item_spotifytrack.spotifytrack.md)[]

The spotify tracks of this playlist.

#### Defined in

[item/SpotifyPlaylist.ts:20](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyPlaylist.ts#L20)

___

### type

• `Readonly` **type**: [`Playlist`](../enums/abstract_spotifyitem.spotifyitemtype.md#playlist)

The type of spotify item this is.

#### Overrides

[SpotifyItem](abstract_spotifyitem.spotifyitem.md).[type](abstract_spotifyitem.spotifyitem.md#type)

#### Defined in

[item/SpotifyPlaylist.ts:9](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyPlaylist.ts#L9)

## Accessors

### artwork

• `get` **artwork**(): `string`

The artwork for this playlist.

#### Returns

`string`

#### Defined in

[item/SpotifyPlaylist.ts:51](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyPlaylist.ts#L51)

___

### name

• `get` **name**(): `string`

The name of this track.

#### Returns

`string`

#### Defined in

[item/SpotifyPlaylist.ts:37](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyPlaylist.ts#L37)

___

### owner

• `get` **owner**(): [`User`](../interfaces/spotify.spotify-1.user.md)

The owner of this playlist.

#### Returns

[`User`](../interfaces/spotify.spotify-1.user.md)

#### Defined in

[item/SpotifyPlaylist.ts:44](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyPlaylist.ts#L44)

## Methods

### resolveAllTracks

▸ **resolveAllTracks**(): `Promise`<`Track`[]\>

Resolves every track in this playlist.

#### Returns

`Promise`<`Track`[]\>

The resolved lavalink tracks.

#### Defined in

[item/SpotifyPlaylist.ts:64](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyPlaylist.ts#L64)
