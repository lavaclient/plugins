[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / SpotifyTrack

# Class: SpotifyTrack

## Hierarchy

- [`SpotifyItem`](SpotifyItem.md)

  ↳ **`SpotifyTrack`**

## Table of contents

### Constructors

- [constructor](SpotifyTrack.md#constructor)

### Properties

- [#track](SpotifyTrack.md##track)
- [data](SpotifyTrack.md#data)
- [manager](SpotifyTrack.md#manager)
- [type](SpotifyTrack.md#type)

### Accessors

- [album](SpotifyTrack.md#album)
- [artists](SpotifyTrack.md#artists)
- [artwork](SpotifyTrack.md#artwork)
- [name](SpotifyTrack.md#name)

### Methods

- [resolveYoutubeTrack](SpotifyTrack.md#resolveyoutubetrack)

## Constructors

### constructor

• **new SpotifyTrack**(`manager`, `track`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager` | [`SpotifyManager`](SpotifyManager.md) | The spotify manager. |
| `track` | [`Track`](../interfaces/Spotify.Track.md) | The spotify track data. |

#### Overrides

[SpotifyItem](SpotifyItem.md).[constructor](SpotifyItem.md#constructor)

#### Defined in

[lib/item/SpotifyTrack.ts:25](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/item/SpotifyTrack.ts#L25)

## Properties

### #track

• `Private` **#track**: ``null`` \| `Track` = `null`

The lavalink track.

#### Defined in

[lib/item/SpotifyTrack.ts:19](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/item/SpotifyTrack.ts#L19)

___

### data

• **data**: [`Track`](../interfaces/Spotify.Track.md)

The spotify track data.

#### Defined in

[lib/item/SpotifyTrack.ts:13](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/item/SpotifyTrack.ts#L13)

___

### manager

• `Readonly` **manager**: [`SpotifyManager`](SpotifyManager.md)

The spotify manager.

#### Inherited from

[SpotifyItem](SpotifyItem.md).[manager](SpotifyItem.md#manager)

#### Defined in

[lib/abstract/SpotifyItem.ts:7](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/abstract/SpotifyItem.ts#L7)

___

### type

• **type**: [`Track`](../enums/SpotifyItemType.md#track) = `SpotifyItemType.Track`

The type of spotify item this is.

#### Overrides

[SpotifyItem](SpotifyItem.md).[type](SpotifyItem.md#type)

#### Defined in

[lib/item/SpotifyTrack.ts:8](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/item/SpotifyTrack.ts#L8)

## Accessors

### album

• `get` **album**(): [`Album`](../interfaces/Spotify.Album.md)

The album data for this track.

#### Returns

[`Album`](../interfaces/Spotify.Album.md)

#### Defined in

[lib/item/SpotifyTrack.ts:48](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/item/SpotifyTrack.ts#L48)

___

### artists

• `get` **artists**(): [`Artist`](../interfaces/Spotify.Artist.md)[]

The artists that made this track.

#### Returns

[`Artist`](../interfaces/Spotify.Artist.md)[]

#### Defined in

[lib/item/SpotifyTrack.ts:41](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/item/SpotifyTrack.ts#L41)

___

### artwork

• `get` **artwork**(): `string`

The artwork for this track.

#### Returns

`string`

#### Defined in

[lib/item/SpotifyTrack.ts:55](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/item/SpotifyTrack.ts#L55)

___

### name

• `get` **name**(): `string`

The name of this track.

#### Returns

`string`

#### Defined in

[lib/item/SpotifyTrack.ts:34](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/item/SpotifyTrack.ts#L34)

## Methods

### resolveYoutubeTrack

▸ **resolveYoutubeTrack**(): `Promise`<`Track`\>

Resolves the YouTube track that can be played.

#### Returns

`Promise`<`Track`\>

#### Defined in

[lib/item/SpotifyTrack.ts:67](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/item/SpotifyTrack.ts#L67)
