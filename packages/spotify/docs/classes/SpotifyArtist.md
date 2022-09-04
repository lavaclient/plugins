[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / SpotifyArtist

# Class: SpotifyArtist

## Hierarchy

- [`SpotifyItem`](SpotifyItem.md)

  ↳ **`SpotifyArtist`**

## Table of contents

### Constructors

- [constructor](SpotifyArtist.md#constructor)

### Properties

- [data](SpotifyArtist.md#data)
- [manager](SpotifyArtist.md#manager)
- [topTracks](SpotifyArtist.md#toptracks)
- [type](SpotifyArtist.md#type)

### Accessors

- [artwork](SpotifyArtist.md#artwork)
- [name](SpotifyArtist.md#name)

### Methods

- [resolveYoutubeTracks](SpotifyArtist.md#resolveyoutubetracks)

## Constructors

### constructor

• **new SpotifyArtist**(`manager`, `data`, `topTracks`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager` | [`SpotifyManager`](SpotifyManager.md) | The spotify manager. |
| `data` | [`Artist`](../interfaces/Spotify.Artist.md) | The data for this artist. |
| `topTracks` | [`Track`](../interfaces/Spotify.Track.md)[] | The top tracks for this artist. |

#### Overrides

[SpotifyItem](SpotifyItem.md).[constructor](SpotifyItem.md#constructor)

#### Defined in

[lib/item/SpotifyArtist.ts:26](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/item/SpotifyArtist.ts#L26)

## Properties

### data

• `Readonly` **data**: [`Artist`](../interfaces/Spotify.Artist.md)

The spotify data for this artist.

#### Defined in

[lib/item/SpotifyArtist.ts:14](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/item/SpotifyArtist.ts#L14)

___

### manager

• `Readonly` **manager**: [`SpotifyManager`](SpotifyManager.md)

The spotify manager.

#### Inherited from

[SpotifyItem](SpotifyItem.md).[manager](SpotifyItem.md#manager)

#### Defined in

[lib/abstract/SpotifyItem.ts:7](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/abstract/SpotifyItem.ts#L7)

___

### topTracks

• `Readonly` **topTracks**: [`SpotifyTrack`](SpotifyTrack.md)[]

The top tracks for this artist.

#### Defined in

[lib/item/SpotifyArtist.ts:19](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/item/SpotifyArtist.ts#L19)

___

### type

• **type**: [`Artist`](../enums/SpotifyItemType.md#artist) = `SpotifyItemType.Artist`

The type of spotify item this is.

#### Overrides

[SpotifyItem](SpotifyItem.md).[type](SpotifyItem.md#type)

#### Defined in

[lib/item/SpotifyArtist.ts:9](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/item/SpotifyArtist.ts#L9)

## Accessors

### artwork

• `get` **artwork**(): `string`

The artwork for this artist.

#### Returns

`string`

#### Defined in

[lib/item/SpotifyArtist.ts:49](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/item/SpotifyArtist.ts#L49)

___

### name

• `get` **name**(): `string`

This artist's name.

#### Returns

`string`

#### Defined in

[lib/item/SpotifyArtist.ts:42](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/item/SpotifyArtist.ts#L42)

## Methods

### resolveYoutubeTracks

▸ **resolveYoutubeTracks**(): `Promise`<`Track`[]\>

Resolves every top track of this artist..

#### Returns

`Promise`<`Track`[]\>

The resolved lavalink tracks.

#### Defined in

[lib/item/SpotifyArtist.ts:62](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/item/SpotifyArtist.ts#L62)
