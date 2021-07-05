[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [item/SpotifyArtist](../modules/item_spotifyartist.md) / SpotifyArtist

# Class: SpotifyArtist

[item/SpotifyArtist](../modules/item_spotifyartist.md).SpotifyArtist

## Hierarchy

- [`SpotifyItem`](abstract_spotifyitem.spotifyitem.md)

  ↳ **`SpotifyArtist`**

## Table of contents

### Constructors

- [constructor](item_spotifyartist.spotifyartist.md#constructor)

### Properties

- [data](item_spotifyartist.spotifyartist.md#data)
- [manager](item_spotifyartist.spotifyartist.md#manager)
- [topTracks](item_spotifyartist.spotifyartist.md#toptracks)
- [type](item_spotifyartist.spotifyartist.md#type)

### Accessors

- [artwork](item_spotifyartist.spotifyartist.md#artwork)
- [name](item_spotifyartist.spotifyartist.md#name)

### Methods

- [resolveAllTracks](item_spotifyartist.spotifyartist.md#resolvealltracks)

## Constructors

### constructor

• **new SpotifyArtist**(`manager`, `data`, `topTracks`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager` | [`SpotifyManager`](spotifymanager.spotifymanager-1.md) | The spotify manager. |
| `data` | [`Artist`](../interfaces/spotify.spotify-1.artist.md) | The data for this artist. |
| `topTracks` | [`Track`](../interfaces/spotify.spotify-1.track.md)[] | The top tracks for this artist. |

#### Overrides

[SpotifyItem](abstract_spotifyitem.spotifyitem.md).[constructor](abstract_spotifyitem.spotifyitem.md#constructor)

#### Defined in

[item/SpotifyArtist.ts:19](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyArtist.ts#L19)

## Properties

### data

• `Readonly` **data**: [`Artist`](../interfaces/spotify.spotify-1.artist.md)

The spotify data for this artist.

#### Defined in

[item/SpotifyArtist.ts:14](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyArtist.ts#L14)

___

### manager

• `Readonly` **manager**: [`SpotifyManager`](spotifymanager.spotifymanager-1.md)

The spotify manager.

#### Inherited from

[SpotifyItem](abstract_spotifyitem.spotifyitem.md).[manager](abstract_spotifyitem.spotifyitem.md#manager)

#### Defined in

[abstract/SpotifyItem.ts:7](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/abstract/SpotifyItem.ts#L7)

___

### topTracks

• `Readonly` **topTracks**: [`SpotifyTrack`](item_spotifytrack.spotifytrack.md)[]

The top tracks for this artist.

#### Defined in

[item/SpotifyArtist.ts:19](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyArtist.ts#L19)

___

### type

• **type**: [`Artist`](../enums/abstract_spotifyitem.spotifyitemtype.md#artist)

The type of spotify item this is.

#### Overrides

[SpotifyItem](abstract_spotifyitem.spotifyitem.md).[type](abstract_spotifyitem.spotifyitem.md#type)

#### Defined in

[item/SpotifyArtist.ts:9](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyArtist.ts#L9)

## Accessors

### artwork

• `get` **artwork**(): `string`

The artwork for this artist.

#### Returns

`string`

#### Defined in

[item/SpotifyArtist.ts:43](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyArtist.ts#L43)

___

### name

• `get` **name**(): `string`

This artist's name.

#### Returns

`string`

#### Defined in

[item/SpotifyArtist.ts:36](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyArtist.ts#L36)

## Methods

### resolveAllTracks

▸ **resolveAllTracks**(): `Promise`<`Track`[]\>

Resolves every top track of this artist..

#### Returns

`Promise`<`Track`[]\>

The resolved lavalink tracks.

#### Defined in

[item/SpotifyArtist.ts:56](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/item/SpotifyArtist.ts#L56)
