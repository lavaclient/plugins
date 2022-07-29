[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / SpotifyManager

# Class: SpotifyManager

## Table of contents

### Constructors

- [constructor](SpotifyManager.md#constructor)

### Properties

- [#client](SpotifyManager.md##client)
- [#token](SpotifyManager.md##token)
- [dispatcher](SpotifyManager.md#dispatcher)
- [loaders](SpotifyManager.md#loaders)
- [manager](SpotifyManager.md#manager)
- [options](SpotifyManager.md#options)
- [searchPrefix](SpotifyManager.md#searchprefix)
- [API\_URL](SpotifyManager.md#api_url)
- [DEFAULTS](SpotifyManager.md#defaults)
- [DEFAULT\_PAGE\_STRATEGY](SpotifyManager.md#default_page_strategy)
- [SOURCE\_PREFIX](SpotifyManager.md#source_prefix)

### Accessors

- [encoded](SpotifyManager.md#encoded)
- [token](SpotifyManager.md#token)

### Methods

- [isSpotifyUrl](SpotifyManager.md#isspotifyurl)
- [load](SpotifyManager.md#load)
- [makeRequest](SpotifyManager.md#makerequest)
- [renew](SpotifyManager.md#renew)

## Constructors

### constructor

• **new SpotifyManager**(`lavaclient`, `options`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lavaclient` | `Manager` | The lavaclient manager. |
| `options` | [`SpotifyManagerOptions`](../interfaces/SpotifyManagerOptions.md) | The options for this spotify manager. |

#### Defined in

[lib/SpotifyManager.ts:91](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L91)

## Properties

### #client

• `Private` `Readonly` **#client**: [`SpotifyClientOptions`](../interfaces/SpotifyClientOptions.md)

The client id.

#### Defined in

[lib/SpotifyManager.ts:85](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L85)

___

### #token

• `Private` **#token**: ``null`` \| `string` = `null`

The token to use.

#### Defined in

[lib/SpotifyManager.ts:79](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L79)

___

### dispatcher

• `Readonly` **dispatcher**: `Dispatcher`

The HTTP dispatcher for this spotify manager.

#### Defined in

[lib/SpotifyManager.ts:53](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L53)

___

### loaders

• **loaders**: [`Loader`](Loader.md)[]

The enabled loaders.

#### Defined in

[lib/SpotifyManager.ts:68](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L68)

___

### manager

• `Readonly` **manager**: `Manager`

The lavaclient manager.

#### Defined in

[lib/SpotifyManager.ts:58](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L58)

___

### options

• `Readonly` **options**: `Required`<[`SpotifyManagerOptions`](../interfaces/SpotifyManagerOptions.md)\>

The options provided to the spotify manager.

#### Defined in

[lib/SpotifyManager.ts:63](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L63)

___

### searchPrefix

• **searchPrefix**: `string`

The source used for resolving lavalink tracks.

#### Defined in

[lib/SpotifyManager.ts:73](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L73)

___

### API\_URL

▪ `Static` `Readonly` **API\_URL**: ``"https://api.spotify.com"``

#### Defined in

[lib/SpotifyManager.ts:16](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L16)

___

### DEFAULTS

▪ `Static` `Readonly` **DEFAULTS**: `Omit`<[`SpotifyManagerOptions`](../interfaces/SpotifyManagerOptions.md), ``"client"``\>

#### Defined in

[lib/SpotifyManager.ts:33](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L33)

___

### DEFAULT\_PAGE\_STRATEGY

▪ `Static` `Readonly` **DEFAULT\_PAGE\_STRATEGY**: [`PageLoadingStrategy`](../interfaces/PageLoadingStrategy.md)

Loads at the maximum 10, 100-track pages, sequentially.

#### Defined in

[lib/SpotifyManager.ts:21](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L21)

___

### SOURCE\_PREFIX

▪ `Static` `Readonly` **SOURCE\_PREFIX**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `soundcloud` | `string` |
| `youtube` | `string` |
| `youtube music` | `string` |

#### Defined in

[lib/SpotifyManager.ts:27](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L27)

## Accessors

### encoded

• `Private` `get` **encoded**(): `string`

The authorization used for tokens.

#### Returns

`string`

#### Defined in

[lib/SpotifyManager.ts:128](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L128)

___

### token

• `get` **token**(): ``null`` \| `string`

The current access token.

#### Returns

``null`` \| `string`

#### Defined in

[lib/SpotifyManager.ts:120](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L120)

## Methods

### isSpotifyUrl

▸ **isSpotifyUrl**(`url`): `boolean`

Determine whether a URL is a spotify url.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The url to test. |

#### Returns

`boolean`

#### Defined in

[lib/SpotifyManager.ts:138](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L138)

___

### load

▸ **load**(`url`): `Promise`<``null`` \| [`Item`](../modules.md#item)\>

Loads a spotify resource with the provided url.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The playlist, track, or album url to load. |

#### Returns

`Promise`<``null`` \| [`Item`](../modules.md#item)\>

The loaded spotify resource.

#### Defined in

[lib/SpotifyManager.ts:171](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L171)

___

### makeRequest

▸ **makeRequest**<`T`\>(`endpoint`): `Promise`<`T`\>

Makes a request to the spotify api.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Dictionary`<`any`, `string`\> = `Dictionary`<`any`, `string`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | `string` | If prefixing with the base url, the endpoint. Or full URL. |

#### Returns

`Promise`<`T`\>

#### Defined in

[lib/SpotifyManager.ts:151](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L151)

___

### renew

▸ **renew**(): `Promise`<`void`\>

Requests the spotify token and schedules to renew it.

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/SpotifyManager.ts:208](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L208)
