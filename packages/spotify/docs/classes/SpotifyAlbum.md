[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / SpotifyAlbum

# Class: SpotifyAlbum

## Hierarchy

- [`SpotifyItem`](SpotifyItem.md)

  ↳ **`SpotifyAlbum`**

## Table of contents

### Constructors

- [constructor](SpotifyAlbum.md#constructor)

### Properties

- [data](SpotifyAlbum.md#data)
- [manager](SpotifyAlbum.md#manager)
- [tracks](SpotifyAlbum.md#tracks)
- [type](SpotifyAlbum.md#type)

### Accessors

- [artists](SpotifyAlbum.md#artists)
- [artwork](SpotifyAlbum.md#artwork)
- [name](SpotifyAlbum.md#name)

### Methods

- [resolveYoutubeTracks](SpotifyAlbum.md#resolveyoutubetracks)
- [convertTracks](SpotifyAlbum.md#converttracks)

## Constructors

### constructor

• **new SpotifyAlbum**(`manager`, `album`, `tracks`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager` | [`SpotifyManager`](SpotifyManager.md) | The spotify manager. |
| `album` | [`Album`](../interfaces/Spotify.Album.md) |  |
| `tracks` | [`SpotifyTrack`](SpotifyTrack.md)[] |  |

#### Overrides

[SpotifyItem](SpotifyItem.md).[constructor](SpotifyItem.md#constructor)

#### Defined in

[lib/item/SpotifyAlbum.ts:27](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/item/SpotifyAlbum.ts#L27)

## Properties

### data

• **data**: [`Album`](../interfaces/Spotify.Album.md)

The album data.

#### Defined in

[lib/item/SpotifyAlbum.ts:14](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/item/SpotifyAlbum.ts#L14)

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

The spotify tracks of this album.

#### Defined in

[lib/item/SpotifyAlbum.ts:20](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/item/SpotifyAlbum.ts#L20)

___

### type

• `Readonly` **type**: [`Album`](../enums/SpotifyItemType.md#album) = `SpotifyItemType.Album`

The type of spotify item this is.

#### Overrides

[SpotifyItem](SpotifyItem.md).[type](SpotifyItem.md#type)

#### Defined in

[lib/item/SpotifyAlbum.ts:9](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/item/SpotifyAlbum.ts#L9)

## Accessors

### artists

• `get` **artists**(): [`Artist`](../interfaces/Spotify.Artist.md)[]

The artists that made this track.

#### Returns

[`Artist`](../interfaces/Spotify.Artist.md)[]

#### Defined in

[lib/item/SpotifyAlbum.ts:48](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/item/SpotifyAlbum.ts#L48)

___

### artwork

• `get` **artwork**(): ``null`` \| `string`

The artwork for this track.

#### Returns

``null`` \| `string`

#### Defined in

[lib/item/SpotifyAlbum.ts:55](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/item/SpotifyAlbum.ts#L55)

___

### name

• `get` **name**(): `string`

The name of this track.

#### Returns

`string`

#### Defined in

[lib/item/SpotifyAlbum.ts:41](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/item/SpotifyAlbum.ts#L41)

## Methods

### resolveYoutubeTracks

▸ **resolveYoutubeTracks**(): `Promise`<`Track`[]\>

Resolves every track in this album.

#### Returns

`Promise`<`Track`[]\>

The resolved lavalink tracks.

#### Defined in

[lib/item/SpotifyAlbum.ts:84](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/item/SpotifyAlbum.ts#L84)

___

### convertTracks

▸ `Static` **convertTracks**(`manager`, `tracks`): [`SpotifyTrack`](SpotifyTrack.md)[]

Converts raw tracks into SpotifyTracks

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`SpotifyManager`](SpotifyManager.md) |
| `tracks` | [`Track`](../interfaces/Spotify.Track.md)[] |

#### Returns

[`SpotifyTrack`](SpotifyTrack.md)[]

#### Defined in

[lib/item/SpotifyAlbum.ts:73](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/item/SpotifyAlbum.ts#L73)
