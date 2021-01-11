[@lavaclient/spotify](../../README.md) / [Exports](../../modules.md) / [abstract/SpotifyItem](../../modules/abstract_spotifyitem.md) / SpotifyItem

# Class: SpotifyItem

[abstract/SpotifyItem](../../modules/abstract_spotifyitem.md).SpotifyItem

## Hierarchy

* **SpotifyItem**

  ↳ [*SpotifyAlbum*](../item/spotifyalbum.spotifyalbum.md)

  ↳ [*SpotifyPlaylist*](../item/spotifyplaylist.spotifyplaylist.md)

  ↳ [*SpotifyTrack*](../item/spotifytrack.spotifytrack.md)

  ↳ [*SpotifyPlaylist*](../index.spotifyplaylist.md)

  ↳ [*SpotifyAlbum*](../index.spotifyalbum.md)

  ↳ [*SpotifyTrack*](../index.spotifytrack.md)

## Table of contents

### Constructors

- [constructor](spotifyitem.spotifyitem.md#constructor)

### Properties

- [manager](spotifyitem.spotifyitem.md#manager)
- [type](spotifyitem.spotifyitem.md#type)

## Constructors

### constructor

\+ **new SpotifyItem**(`manager`: [*SpotifyManager*](../spotifymanager.spotifymanager-1.md)): [*SpotifyItem*](spotifyitem.spotifyitem.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`manager` | [*SpotifyManager*](../spotifymanager.spotifymanager-1.md) | The spotify manager.    |

**Returns:** [*SpotifyItem*](spotifyitem.spotifyitem.md)

Defined in: [abstract/SpotifyItem.ts:12](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/abstract/SpotifyItem.ts#L12)

## Properties

### manager

• `Readonly` **manager**: [*SpotifyManager*](../spotifymanager.spotifymanager-1.md)

The spotify manager.

Defined in: [abstract/SpotifyItem.ts:7](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/abstract/SpotifyItem.ts#L7)

___

### type

• `Abstract` **type**: [*SpotifyItemType*](../../modules/abstract_spotifyitem.md#spotifyitemtype)

The type of spotify item this is.

Defined in: [abstract/SpotifyItem.ts:12](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/abstract/SpotifyItem.ts#L12)
