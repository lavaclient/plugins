[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [item/SpotifyAlbum](../modules/item_spotifyalbum.md) / SpotifyAlbum

# Class: SpotifyAlbum

[item/SpotifyAlbum](../modules/item_spotifyalbum.md).SpotifyAlbum

## Hierarchy

- [`SpotifyItem`](abstract_spotifyitem.spotifyitem.md)

  ↳ **`SpotifyAlbum`**

## Table of contents

### Constructors

- [constructor](item_spotifyalbum.spotifyalbum.md#constructor)

### Properties

- [data](item_spotifyalbum.spotifyalbum.md#data)
- [manager](item_spotifyalbum.spotifyalbum.md#manager)
- [tracks](item_spotifyalbum.spotifyalbum.md#tracks)
- [type](item_spotifyalbum.spotifyalbum.md#type)

### Accessors

- [artists](item_spotifyalbum.spotifyalbum.md#artists)
- [artwork](item_spotifyalbum.spotifyalbum.md#artwork)
- [name](item_spotifyalbum.spotifyalbum.md#name)

### Methods

- [resolveAllTracks](item_spotifyalbum.spotifyalbum.md#resolvealltracks)
- [convertTracks](item_spotifyalbum.spotifyalbum.md#converttracks)

## Constructors

### constructor

• **new SpotifyAlbum**(`manager`, `album`, `tracks`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager` | [`SpotifyManager`](spotifymanager.spotifymanager-1.md) | The spotify manager. |
| `album` | [`Album`](../interfaces/spotify.spotify-1.album.md) |  |
| `tracks` | [`SpotifyTrack`](item_spotifytrack.spotifytrack.md)[] |  |

#### Overrides

[SpotifyItem](abstract_spotifyitem.spotifyitem.md).[constructor](abstract_spotifyitem.spotifyitem.md#constructor)

#### Defined in

[item/SpotifyAlbum.ts:20](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyAlbum.ts#L20)

## Properties

### data

• **data**: [`Album`](../interfaces/spotify.spotify-1.album.md)

The album data.

#### Defined in

[item/SpotifyAlbum.ts:14](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyAlbum.ts#L14)

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

The spotify tracks of this album.

#### Defined in

[item/SpotifyAlbum.ts:20](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyAlbum.ts#L20)

___

### type

• `Readonly` **type**: [`Album`](../enums/abstract_spotifyitem.spotifyitemtype.md#album)

The type of spotify item this is.

#### Overrides

[SpotifyItem](abstract_spotifyitem.spotifyitem.md).[type](abstract_spotifyitem.spotifyitem.md#type)

#### Defined in

[item/SpotifyAlbum.ts:9](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyAlbum.ts#L9)

## Accessors

### artists

• `get` **artists**(): [`Artist`](../interfaces/spotify.spotify-1.artist.md)[]

The artists that made this track.

#### Returns

[`Artist`](../interfaces/spotify.spotify-1.artist.md)[]

#### Defined in

[item/SpotifyAlbum.ts:44](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyAlbum.ts#L44)

___

### artwork

• `get` **artwork**(): ``null`` \| `string`

The artwork for this track.

#### Returns

``null`` \| `string`

#### Defined in

[item/SpotifyAlbum.ts:51](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyAlbum.ts#L51)

___

### name

• `get` **name**(): `string`

The name of this track.

#### Returns

`string`

#### Defined in

[item/SpotifyAlbum.ts:37](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyAlbum.ts#L37)

## Methods

### resolveAllTracks

▸ **resolveAllTracks**(): `Promise`<`Track`[]\>

Resolves every track in this album.

#### Returns

`Promise`<`Track`[]\>

The resolved lavalink tracks.

#### Defined in

[item/SpotifyAlbum.ts:77](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyAlbum.ts#L77)

___

### convertTracks

▸ `Static` **convertTracks**(`manager`, `tracks`): [`SpotifyTrack`](item_spotifytrack.spotifytrack.md)[]

Converts raw tracks into SpotifyTracks

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`SpotifyManager`](spotifymanager.spotifymanager-1.md) |
| `tracks` | [`Track`](../interfaces/spotify.spotify-1.track.md)[] |

#### Returns

[`SpotifyTrack`](item_spotifytrack.spotifytrack.md)[]

#### Defined in

[item/SpotifyAlbum.ts:69](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyAlbum.ts#L69)
