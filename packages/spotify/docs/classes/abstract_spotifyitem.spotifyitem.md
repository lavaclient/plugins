[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [abstract/SpotifyItem](../modules/abstract_spotifyitem.md) / SpotifyItem

# Class: SpotifyItem

[abstract/SpotifyItem](../modules/abstract_spotifyitem.md).SpotifyItem

## Hierarchy

- **`SpotifyItem`**

  ↳ [`SpotifyAlbum`](item_spotifyalbum.spotifyalbum.md)

  ↳ [`SpotifyArtist`](item_spotifyartist.spotifyartist.md)

  ↳ [`SpotifyPlaylist`](item_spotifyplaylist.spotifyplaylist.md)

  ↳ [`SpotifyTrack`](item_spotifytrack.spotifytrack.md)

## Table of contents

### Constructors

- [constructor](abstract_spotifyitem.spotifyitem.md#constructor)

### Properties

- [manager](abstract_spotifyitem.spotifyitem.md#manager)
- [type](abstract_spotifyitem.spotifyitem.md#type)

## Constructors

### constructor

• `Protected` **new SpotifyItem**(`manager`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager` | [`SpotifyManager`](spotifymanager.spotifymanager-1.md) | The spotify manager. |

#### Defined in

[abstract/SpotifyItem.ts:12](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/abstract/SpotifyItem.ts#L12)

## Properties

### manager

• `Readonly` **manager**: [`SpotifyManager`](spotifymanager.spotifymanager-1.md)

The spotify manager.

#### Defined in

[abstract/SpotifyItem.ts:7](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/abstract/SpotifyItem.ts#L7)

___

### type

• `Abstract` **type**: [`SpotifyItemType`](../enums/abstract_spotifyitem.spotifyitemtype.md)

The type of spotify item this is.

#### Defined in

[abstract/SpotifyItem.ts:12](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/abstract/SpotifyItem.ts#L12)
