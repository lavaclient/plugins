[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / SpotifyItem

# Class: SpotifyItem

## Hierarchy

- **`SpotifyItem`**

  ↳ [`SpotifyPlaylist`](SpotifyPlaylist.md)

  ↳ [`SpotifyAlbum`](SpotifyAlbum.md)

  ↳ [`SpotifyArtist`](SpotifyArtist.md)

  ↳ [`SpotifyTrack`](SpotifyTrack.md)

## Table of contents

### Constructors

- [constructor](SpotifyItem.md#constructor)

### Properties

- [manager](SpotifyItem.md#manager)
- [type](SpotifyItem.md#type)

## Constructors

### constructor

• `Protected` **new SpotifyItem**(`manager`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager` | [`SpotifyManager`](SpotifyManager.md) | The spotify manager. |

#### Defined in

[lib/abstract/SpotifyItem.ts:17](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/abstract/SpotifyItem.ts#L17)

## Properties

### manager

• `Readonly` **manager**: [`SpotifyManager`](SpotifyManager.md)

The spotify manager.

#### Defined in

[lib/abstract/SpotifyItem.ts:7](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/abstract/SpotifyItem.ts#L7)

___

### type

• `Abstract` **type**: [`SpotifyItemType`](../enums/SpotifyItemType.md)

The type of spotify item this is.

#### Defined in

[lib/abstract/SpotifyItem.ts:12](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/abstract/SpotifyItem.ts#L12)
