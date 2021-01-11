[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / [Spotify](../modules/index.spotify.md) / Album

# Interface: Album

[index](../modules/index.md).[Spotify](../modules/index.spotify.md).Album

## Hierarchy

* [*ContextObject*](spotify.spotify.contextobject.md)

  ↳ **Album**

## Table of contents

### Properties

- [album\_group](index.spotify.album.md#album_group)
- [album\_type](index.spotify.album.md#album_type)
- [artists](index.spotify.album.md#artists)
- [available\_markets](index.spotify.album.md#available_markets)
- [copyrights](index.spotify.album.md#copyrights)
- [external\_ids](index.spotify.album.md#external_ids)
- [external\_urls](index.spotify.album.md#external_urls)
- [genres](index.spotify.album.md#genres)
- [href](index.spotify.album.md#href)
- [id](index.spotify.album.md#id)
- [images](index.spotify.album.md#images)
- [label](index.spotify.album.md#label)
- [name](index.spotify.album.md#name)
- [popularity](index.spotify.album.md#popularity)
- [release\_date](index.spotify.album.md#release_date)
- [release\_date\_precision](index.spotify.album.md#release_date_precision)
- [restrictions](index.spotify.album.md#restrictions)
- [tracks](index.spotify.album.md#tracks)
- [type](index.spotify.album.md#type)
- [uri](index.spotify.album.md#uri)

## Properties

### album\_group

• `Optional` **album\_group**: *undefined* \| *album* \| *single* \| *compilation* \| *appears_on*

Defined in: [spotify.ts:45](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L45)

___

### album\_type

• **album\_type**: *album* \| *single* \| *compilation*

Defined in: [spotify.ts:46](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L46)

___

### artists

• **artists**: [*Artist*](spotify.spotify.artist.md)[]

Defined in: [spotify.ts:47](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L47)

___

### available\_markets

• `Optional` **available\_markets**: *undefined* \| *string*[]

Defined in: [spotify.ts:48](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L48)

___

### copyrights

• **copyrights**: [*CopyrightObject*](spotify.spotify.copyrightobject.md)[]

Defined in: [spotify.ts:56](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L56)

___

### external\_ids

• **external\_ids**: [*ExternalIdObject*](spotify.spotify.externalidobject.md)

Defined in: [spotify.ts:57](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L57)

___

### external\_urls

• **external\_urls**: [*ExternalUrlObject*](spotify.spotify.externalurlobject.md)

Inherited from: [ContextObject](spotify.spotify.contextobject.md).[external_urls](spotify.spotify.contextobject.md#external_urls)

Defined in: [spotify.ts:25](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L25)

___

### genres

• **genres**: *string*[]

Defined in: [spotify.ts:58](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L58)

___

### href

• **href**: *string*

Inherited from: [ContextObject](spotify.spotify.contextobject.md).[href](spotify.spotify.contextobject.md#href)

Defined in: [spotify.ts:24](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L24)

___

### id

• **id**: *string*

Defined in: [spotify.ts:49](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L49)

___

### images

• **images**: [*ImageObject*](spotify.spotify.imageobject.md)[]

Defined in: [spotify.ts:50](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L50)

___

### label

• **label**: *string*

Defined in: [spotify.ts:59](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L59)

___

### name

• **name**: *string*

Defined in: [spotify.ts:51](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L51)

___

### popularity

• **popularity**: *number*

Defined in: [spotify.ts:60](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L60)

___

### release\_date

• **release\_date**: *string*

Defined in: [spotify.ts:52](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L52)

___

### release\_date\_precision

• **release\_date\_precision**: *year* \| *month* \| *day*

Defined in: [spotify.ts:53](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L53)

___

### restrictions

• `Optional` **restrictions**: *undefined* \| [*RestrictionsObject*](spotify.spotify.restrictionsobject.md)

Defined in: [spotify.ts:54](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L54)

___

### tracks

• **tracks**: [*PagingObject*](spotify.spotify.pagingobject.md)<[*Track*](spotify.spotify.track.md)\>

Defined in: [spotify.ts:61](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L61)

___

### type

• **type**: *album*

Overrides: [ContextObject](spotify.spotify.contextobject.md).[type](spotify.spotify.contextobject.md#type)

Defined in: [spotify.ts:55](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L55)

___

### uri

• **uri**: *string*

Inherited from: [ContextObject](spotify.spotify.contextobject.md).[uri](spotify.spotify.contextobject.md#uri)

Defined in: [spotify.ts:26](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/spotify.ts#L26)
