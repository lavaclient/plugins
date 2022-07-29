[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / SpotifyPlaylist

# Class: SpotifyPlaylist

## Hierarchy

- [`SpotifyItem`](SpotifyItem.md)

  ↳ **`SpotifyPlaylist`**

## Table of contents

### Constructors

- [constructor](SpotifyPlaylist.md#constructor)

### Properties

- [data](SpotifyPlaylist.md#data)
- [manager](SpotifyPlaylist.md#manager)
- [tracks](SpotifyPlaylist.md#tracks)
- [type](SpotifyPlaylist.md#type)

### Accessors

- [artwork](SpotifyPlaylist.md#artwork)
- [name](SpotifyPlaylist.md#name)
- [owner](SpotifyPlaylist.md#owner)

### Methods

- [resolveYoutubeTracks](SpotifyPlaylist.md#resolveyoutubetracks)

## Constructors

### constructor

• **new SpotifyPlaylist**(`manager`, `album`, `tracks`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager` | [`SpotifyManager`](SpotifyManager.md) | The spotify manager. |
| `album` | [`Playlist`](../interfaces/Spotify.Playlist.md) |  |
| `tracks` | [`SpotifyTrack`](SpotifyTrack.md)[] |  |

#### Overrides

[SpotifyItem](SpotifyItem.md).[constructor](SpotifyItem.md#constructor)

#### Defined in

[lib/item/SpotifyPlaylist.ts:27](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/item/SpotifyPlaylist.ts#L27)

## Properties

### data

• `Readonly` **data**: [`Playlist`](../interfaces/Spotify.Playlist.md)

The playlist data.

#### Defined in

[lib/item/SpotifyPlaylist.ts:14](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/item/SpotifyPlaylist.ts#L14)

___

### manager

• `Readonly` **manager**: [`SpotifyManager`](SpotifyManager.md)

The spotify manager.

#### Inherited from

[SpotifyItem](SpotifyItem.md).[manager](SpotifyItem.md#manager)

#### Defined in

[lib/abstract/SpotifyItem.ts:7](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/abstract/SpotifyItem.ts#L7)

___

### tracks

• `Readonly` `Private` **tracks**: [`SpotifyTrack`](SpotifyTrack.md)[]

The spotify tracks of this playlist.

#### Defined in

[lib/item/SpotifyPlaylist.ts:20](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/item/SpotifyPlaylist.ts#L20)

___

### type

• `Readonly` **type**: [`Playlist`](../enums/SpotifyItemType.md#playlist) = `SpotifyItemType.Playlist`

The type of spotify item this is.

#### Overrides

[SpotifyItem](SpotifyItem.md).[type](SpotifyItem.md#type)

#### Defined in

[lib/item/SpotifyPlaylist.ts:9](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/item/SpotifyPlaylist.ts#L9)

## Accessors

### artwork

• `get` **artwork**(): `string`

The artwork for this playlist.

#### Returns

`string`

#### Defined in

[lib/item/SpotifyPlaylist.ts:55](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/item/SpotifyPlaylist.ts#L55)

___

### name

• `get` **name**(): `string`

The name of this track.

#### Returns

`string`

#### Defined in

[lib/item/SpotifyPlaylist.ts:41](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/item/SpotifyPlaylist.ts#L41)

___

### owner

• `get` **owner**(): [`User`](../interfaces/Spotify.User.md)

The owner of this playlist.

#### Returns

[`User`](../interfaces/Spotify.User.md)

#### Defined in

[lib/item/SpotifyPlaylist.ts:48](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/item/SpotifyPlaylist.ts#L48)

## Methods

### resolveYoutubeTracks

▸ **resolveYoutubeTracks**(): `Promise`<`Track`[]\>

Resolves every track in this playlist.

#### Returns

`Promise`<`Track`[]\>

The resolved lavalink tracks.

#### Defined in

[lib/item/SpotifyPlaylist.ts:68](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/item/SpotifyPlaylist.ts#L68)
