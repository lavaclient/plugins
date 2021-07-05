[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [spotify](../modules/spotify.md) / [Spotify](../modules/spotify.spotify-1.md) / Album

# Interface: Album

[spotify](../modules/spotify.md).[Spotify](../modules/spotify.spotify-1.md).Album

## Hierarchy

- [`ContextObject`](spotify.spotify-1.contextobject.md)

  ↳ **`Album`**

## Table of contents

### Properties

- [album\_group](spotify.spotify-1.album.md#album_group)
- [album\_type](spotify.spotify-1.album.md#album_type)
- [artists](spotify.spotify-1.album.md#artists)
- [available\_markets](spotify.spotify-1.album.md#available_markets)
- [copyrights](spotify.spotify-1.album.md#copyrights)
- [external\_ids](spotify.spotify-1.album.md#external_ids)
- [external\_urls](spotify.spotify-1.album.md#external_urls)
- [genres](spotify.spotify-1.album.md#genres)
- [href](spotify.spotify-1.album.md#href)
- [id](spotify.spotify-1.album.md#id)
- [images](spotify.spotify-1.album.md#images)
- [label](spotify.spotify-1.album.md#label)
- [name](spotify.spotify-1.album.md#name)
- [popularity](spotify.spotify-1.album.md#popularity)
- [release\_date](spotify.spotify-1.album.md#release_date)
- [release\_date\_precision](spotify.spotify-1.album.md#release_date_precision)
- [restrictions](spotify.spotify-1.album.md#restrictions)
- [tracks](spotify.spotify-1.album.md#tracks)
- [type](spotify.spotify-1.album.md#type)
- [uri](spotify.spotify-1.album.md#uri)

## Properties

### album\_group

• `Optional` **album\_group**: ``"album"`` \| ``"single"`` \| ``"compilation"`` \| ``"appears_on"``

#### Defined in

[spotify.ts:45](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L45)

___

### album\_type

• **album\_type**: ``"album"`` \| ``"single"`` \| ``"compilation"``

#### Defined in

[spotify.ts:46](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L46)

___

### artists

• **artists**: [`Artist`](spotify.spotify-1.artist.md)[]

#### Defined in

[spotify.ts:47](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L47)

___

### available\_markets

• `Optional` **available\_markets**: `string`[]

#### Defined in

[spotify.ts:48](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L48)

___

### copyrights

• **copyrights**: [`CopyrightObject`](spotify.spotify-1.copyrightobject.md)[]

#### Defined in

[spotify.ts:56](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L56)

___

### external\_ids

• **external\_ids**: [`ExternalIdObject`](spotify.spotify-1.externalidobject.md)

#### Defined in

[spotify.ts:57](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L57)

___

### external\_urls

• **external\_urls**: [`ExternalUrlObject`](spotify.spotify-1.externalurlobject.md)

#### Inherited from

[ContextObject](spotify.spotify-1.contextobject.md).[external_urls](spotify.spotify-1.contextobject.md#external_urls)

#### Defined in

[spotify.ts:25](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L25)

___

### genres

• **genres**: `string`[]

#### Defined in

[spotify.ts:58](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L58)

___

### href

• **href**: `string`

#### Inherited from

[ContextObject](spotify.spotify-1.contextobject.md).[href](spotify.spotify-1.contextobject.md#href)

#### Defined in

[spotify.ts:24](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L24)

___

### id

• **id**: `string`

#### Defined in

[spotify.ts:49](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L49)

___

### images

• **images**: [`ImageObject`](spotify.spotify-1.imageobject.md)[]

#### Defined in

[spotify.ts:50](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L50)

___

### label

• **label**: `string`

#### Defined in

[spotify.ts:59](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L59)

___

### name

• **name**: `string`

#### Defined in

[spotify.ts:51](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L51)

___

### popularity

• **popularity**: `number`

#### Defined in

[spotify.ts:60](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L60)

___

### release\_date

• **release\_date**: `string`

#### Defined in

[spotify.ts:52](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L52)

___

### release\_date\_precision

• **release\_date\_precision**: ``"year"`` \| ``"month"`` \| ``"day"``

#### Defined in

[spotify.ts:53](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L53)

___

### restrictions

• `Optional` **restrictions**: [`RestrictionsObject`](spotify.spotify-1.restrictionsobject.md)

#### Defined in

[spotify.ts:54](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L54)

___

### tracks

• **tracks**: [`PagingObject`](spotify.spotify-1.pagingobject.md)<[`Track`](spotify.spotify-1.track.md)\>

#### Defined in

[spotify.ts:61](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L61)

___

### type

• **type**: ``"album"``

#### Overrides

[ContextObject](spotify.spotify-1.contextobject.md).[type](spotify.spotify-1.contextobject.md#type)

#### Defined in

[spotify.ts:55](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L55)

___

### uri

• **uri**: `string`

#### Inherited from

[ContextObject](spotify.spotify-1.contextobject.md).[uri](spotify.spotify-1.contextobject.md#uri)

#### Defined in

[spotify.ts:26](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/spotify.ts#L26)
