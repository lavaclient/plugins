[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [Spotify](../modules/Spotify.md) / Album

# Interface: Album

[Spotify](../modules/Spotify.md).Album

## Hierarchy

- [`ContextObject`](Spotify.ContextObject.md)

  ↳ **`Album`**

## Table of contents

### Properties

- [album\_group](Spotify.Album.md#album_group)
- [album\_type](Spotify.Album.md#album_type)
- [artists](Spotify.Album.md#artists)
- [available\_markets](Spotify.Album.md#available_markets)
- [copyrights](Spotify.Album.md#copyrights)
- [external\_ids](Spotify.Album.md#external_ids)
- [external\_urls](Spotify.Album.md#external_urls)
- [genres](Spotify.Album.md#genres)
- [href](Spotify.Album.md#href)
- [id](Spotify.Album.md#id)
- [images](Spotify.Album.md#images)
- [label](Spotify.Album.md#label)
- [name](Spotify.Album.md#name)
- [popularity](Spotify.Album.md#popularity)
- [release\_date](Spotify.Album.md#release_date)
- [release\_date\_precision](Spotify.Album.md#release_date_precision)
- [restrictions](Spotify.Album.md#restrictions)
- [tracks](Spotify.Album.md#tracks)
- [type](Spotify.Album.md#type)
- [uri](Spotify.Album.md#uri)

## Properties

### album\_group

• `Optional` **album\_group**: ``"album"`` \| ``"single"`` \| ``"compilation"`` \| ``"appears_on"``

#### Defined in

[lib/spotify.ts:45](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L45)

___

### album\_type

• **album\_type**: ``"album"`` \| ``"single"`` \| ``"compilation"``

#### Defined in

[lib/spotify.ts:46](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L46)

___

### artists

• **artists**: [`Artist`](Spotify.Artist.md)[]

#### Defined in

[lib/spotify.ts:47](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L47)

___

### available\_markets

• `Optional` **available\_markets**: `string`[]

#### Defined in

[lib/spotify.ts:48](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L48)

___

### copyrights

• **copyrights**: [`CopyrightObject`](Spotify.CopyrightObject.md)[]

#### Defined in

[lib/spotify.ts:56](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L56)

___

### external\_ids

• **external\_ids**: [`ExternalIdObject`](Spotify.ExternalIdObject.md)

#### Defined in

[lib/spotify.ts:57](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L57)

___

### external\_urls

• **external\_urls**: [`ExternalUrlObject`](Spotify.ExternalUrlObject.md)

#### Inherited from

[ContextObject](Spotify.ContextObject.md).[external_urls](Spotify.ContextObject.md#external_urls)

#### Defined in

[lib/spotify.ts:25](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L25)

___

### genres

• **genres**: `string`[]

#### Defined in

[lib/spotify.ts:58](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L58)

___

### href

• **href**: `string`

#### Inherited from

[ContextObject](Spotify.ContextObject.md).[href](Spotify.ContextObject.md#href)

#### Defined in

[lib/spotify.ts:24](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L24)

___

### id

• **id**: `string`

#### Defined in

[lib/spotify.ts:49](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L49)

___

### images

• **images**: [`ImageObject`](Spotify.ImageObject.md)[]

#### Defined in

[lib/spotify.ts:50](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L50)

___

### label

• **label**: `string`

#### Defined in

[lib/spotify.ts:59](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L59)

___

### name

• **name**: `string`

#### Defined in

[lib/spotify.ts:51](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L51)

___

### popularity

• **popularity**: `number`

#### Defined in

[lib/spotify.ts:60](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L60)

___

### release\_date

• **release\_date**: `string`

#### Defined in

[lib/spotify.ts:52](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L52)

___

### release\_date\_precision

• **release\_date\_precision**: ``"year"`` \| ``"month"`` \| ``"day"``

#### Defined in

[lib/spotify.ts:53](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L53)

___

### restrictions

• `Optional` **restrictions**: [`RestrictionsObject`](Spotify.RestrictionsObject.md)

#### Defined in

[lib/spotify.ts:54](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L54)

___

### tracks

• **tracks**: [`PagingObject`](Spotify.PagingObject.md)<[`Track`](Spotify.Track.md)\>

#### Defined in

[lib/spotify.ts:61](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L61)

___

### type

• **type**: ``"album"``

#### Overrides

[ContextObject](Spotify.ContextObject.md).[type](Spotify.ContextObject.md#type)

#### Defined in

[lib/spotify.ts:55](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L55)

___

### uri

• **uri**: `string`

#### Inherited from

[ContextObject](Spotify.ContextObject.md).[uri](Spotify.ContextObject.md#uri)

#### Defined in

[lib/spotify.ts:26](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/spotify.ts#L26)
