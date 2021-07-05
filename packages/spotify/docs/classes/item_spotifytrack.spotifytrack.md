[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [item/SpotifyTrack](../modules/item_spotifytrack.md) / SpotifyTrack

# Class: SpotifyTrack

[item/SpotifyTrack](../modules/item_spotifytrack.md).SpotifyTrack

## Hierarchy

- [`SpotifyItem`](abstract_spotifyitem.spotifyitem.md)

  ↳ **`SpotifyTrack`**

## Table of contents

### Constructors

- [constructor](item_spotifytrack.spotifytrack.md#constructor)

### Properties

- [#track](item_spotifytrack.spotifytrack.md##track)
- [data](item_spotifytrack.spotifytrack.md#data)
- [manager](item_spotifytrack.spotifytrack.md#manager)
- [type](item_spotifytrack.spotifytrack.md#type)

### Accessors

- [album](item_spotifytrack.spotifytrack.md#album)
- [artists](item_spotifytrack.spotifytrack.md#artists)
- [artwork](item_spotifytrack.spotifytrack.md#artwork)
- [name](item_spotifytrack.spotifytrack.md#name)

### Methods

- [resolveLavalinkTrack](item_spotifytrack.spotifytrack.md#resolvelavalinktrack)

## Constructors

### constructor

• **new SpotifyTrack**(`manager`, `track`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager` | [`SpotifyManager`](spotifymanager.spotifymanager-1.md) | The spotify manager. |
| `track` | [`Track`](../interfaces/spotify.spotify-1.track.md) | The spotify track data. |

#### Overrides

[SpotifyItem](abstract_spotifyitem.spotifyitem.md).[constructor](abstract_spotifyitem.spotifyitem.md#constructor)

#### Defined in

[item/SpotifyTrack.ts:19](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyTrack.ts#L19)

## Properties

### #track

• `Private` **#track**: ``null`` \| `Track` = `null`

The lavalink track.

#### Defined in

[item/SpotifyTrack.ts:19](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyTrack.ts#L19)

___

### data

• **data**: [`Track`](../interfaces/spotify.spotify-1.track.md)

The spotify track data.

#### Defined in

[item/SpotifyTrack.ts:13](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyTrack.ts#L13)

___

### manager

• `Readonly` **manager**: [`SpotifyManager`](spotifymanager.spotifymanager-1.md)

The spotify manager.

#### Inherited from

[SpotifyItem](abstract_spotifyitem.spotifyitem.md).[manager](abstract_spotifyitem.spotifyitem.md#manager)

#### Defined in

[abstract/SpotifyItem.ts:7](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/abstract/SpotifyItem.ts#L7)

___

### type

• **type**: [`Track`](../enums/abstract_spotifyitem.spotifyitemtype.md#track)

The type of spotify item this is.

#### Overrides

[SpotifyItem](abstract_spotifyitem.spotifyitem.md).[type](abstract_spotifyitem.spotifyitem.md#type)

#### Defined in

[item/SpotifyTrack.ts:8](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyTrack.ts#L8)

## Accessors

### album

• `get` **album**(): [`Album`](../interfaces/spotify.spotify-1.album.md)

The album data for this track.

#### Returns

[`Album`](../interfaces/spotify.spotify-1.album.md)

#### Defined in

[item/SpotifyTrack.ts:48](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyTrack.ts#L48)

___

### artists

• `get` **artists**(): [`Artist`](../interfaces/spotify.spotify-1.artist.md)[]

The artists that made this track.

#### Returns

[`Artist`](../interfaces/spotify.spotify-1.artist.md)[]

#### Defined in

[item/SpotifyTrack.ts:41](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyTrack.ts#L41)

___

### artwork

• `get` **artwork**(): `string`

The artwork for this track.

#### Returns

`string`

#### Defined in

[item/SpotifyTrack.ts:55](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyTrack.ts#L55)

___

### name

• `get` **name**(): `string`

The name of this track.

#### Returns

`string`

#### Defined in

[item/SpotifyTrack.ts:34](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyTrack.ts#L34)

## Methods

### resolveLavalinkTrack

▸ **resolveLavalinkTrack**(): `Promise`<`Track`\>

Resolves the lavalink track.

#### Returns

`Promise`<`Track`\>

#### Defined in

[item/SpotifyTrack.ts:67](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyTrack.ts#L67)
