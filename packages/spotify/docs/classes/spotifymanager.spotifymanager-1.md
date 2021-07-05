[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [SpotifyManager](../modules/spotifymanager.md) / SpotifyManager

# Class: SpotifyManager

[SpotifyManager](../modules/spotifymanager.md).SpotifyManager

## Table of contents

### Constructors

- [constructor](spotifymanager.spotifymanager-1.md#constructor)

### Properties

- [#clientId](spotifymanager.spotifymanager-1.md##clientid)
- [#clientSecret](spotifymanager.spotifymanager-1.md##clientsecret)
- [#token](spotifymanager.spotifymanager-1.md##token)
- [albumLimit](spotifymanager.spotifymanager-1.md#albumlimit)
- [autoResolveYoutubeVideos](spotifymanager.spotifymanager-1.md#autoresolveyoutubevideos)
- [lavaclient](spotifymanager.spotifymanager-1.md#lavaclient)
- [loaders](spotifymanager.spotifymanager-1.md#loaders)
- [market](spotifymanager.spotifymanager-1.md#market)
- [options](spotifymanager.spotifymanager-1.md#options)
- [playlistLimit](spotifymanager.spotifymanager-1.md#playlistlimit)
- [searchFormat](spotifymanager.spotifymanager-1.md#searchformat)
- [searchPrefix](spotifymanager.spotifymanager-1.md#searchprefix)
- [BASE\_URL](spotifymanager.spotifymanager-1.md#base_url)
- [SOURCE\_PREFIX](spotifymanager.spotifymanager-1.md#source_prefix)

### Accessors

- [clientId](spotifymanager.spotifymanager-1.md#clientid)
- [clientSecret](spotifymanager.spotifymanager-1.md#clientsecret)
- [encoded](spotifymanager.spotifymanager-1.md#encoded)
- [token](spotifymanager.spotifymanager-1.md#token)

### Methods

- [isSpotifyUrl](spotifymanager.spotifymanager-1.md#isspotifyurl)
- [load](spotifymanager.spotifymanager-1.md#load)
- [makeRequest](spotifymanager.spotifymanager-1.md#makerequest)
- [renew](spotifymanager.spotifymanager-1.md#renew)

## Constructors

### constructor

• **new SpotifyManager**(`lavaclient`, `options`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lavaclient` | `Manager` | The lavaclient manager. |
| `options` | [`SpotifyManagerOptions`](../interfaces/spotifymanager.spotifymanageroptions.md) | The options for this spotify manager. |

#### Defined in

[SpotifyManager.ts:84](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L84)

## Properties

### #clientId

• `Private` `Readonly` **#clientId**: `string`

The client id.

#### Defined in

[SpotifyManager.ts:78](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L78)

___

### #clientSecret

• `Private` `Readonly` **#clientSecret**: `string`

The client secret.

#### Defined in

[SpotifyManager.ts:84](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L84)

___

### #token

• `Private` **#token**: ``null`` \| `string` = `null`

The token to use.

#### Defined in

[SpotifyManager.ts:72](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L72)

___

### albumLimit

• **albumLimit**: `number`

Total number of pages to load, each page having 50 tracks.

#### Defined in

[SpotifyManager.ts:50](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L50)

___

### autoResolveYoutubeVideos

• **autoResolveYoutubeVideos**: `boolean`

Whether to automatically resolve track youtube videos

#### Defined in

[SpotifyManager.ts:40](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L40)

___

### lavaclient

• `Readonly` **lavaclient**: `Manager`

The lavaclient manager.

#### Defined in

[SpotifyManager.ts:25](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L25)

___

### loaders

• **loaders**: [`Loader`](abstract_loader.loader.md)[]

The enabled loaders.

#### Defined in

[SpotifyManager.ts:35](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L35)

___

### market

• **market**: `string`

The market to use.

#### Defined in

[SpotifyManager.ts:66](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L66)

___

### options

• `Readonly` **options**: [`SpotifyManagerOptions`](../interfaces/spotifymanager.spotifymanageroptions.md)

The options provided to the spotify manager.

#### Defined in

[SpotifyManager.ts:30](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L30)

___

### playlistLimit

• **playlistLimit**: `number`

Total numbers of pages to load, each page having 100 tracks.

#### Defined in

[SpotifyManager.ts:45](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L45)

___

### searchFormat

• **searchFormat**: `string`

The search format used when resolving lavalink tracks.

#### Defined in

[SpotifyManager.ts:61](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L61)

___

### searchPrefix

• **searchPrefix**: `string`

The source used for resolving lavalink tracks.

#### Defined in

[SpotifyManager.ts:55](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L55)

___

### BASE\_URL

▪ `Static` `Readonly` **BASE\_URL**: ``"https://api.spotify.com/v1"``

#### Defined in

[SpotifyManager.ts:15](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L15)

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

[SpotifyManager.ts:16](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L16)

## Accessors

### clientId

• `get` **clientId**(): `string`

The client id provided.

#### Returns

`string`

#### Defined in

[SpotifyManager.ts:110](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L110)

___

### clientSecret

• `get` **clientSecret**(): `string`

The client secret provided.

#### Returns

`string`

#### Defined in

[SpotifyManager.ts:117](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L117)

___

### encoded

• `Private` `get` **encoded**(): `string`

The authorization used for tokens.

#### Returns

`string`

#### Defined in

[SpotifyManager.ts:132](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L132)

___

### token

• `get` **token**(): ``null`` \| `string`

The current access token.

#### Returns

``null`` \| `string`

#### Defined in

[SpotifyManager.ts:124](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L124)

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

[SpotifyManager.ts:140](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L140)

___

### load

▸ **load**(`url`): `Promise`<``null`` \| [`Item`](../modules/abstract_loader.md#item)\>

Loads a spotify resource with the provided url.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The playlist, track, or album url to load. |

#### Returns

`Promise`<``null`` \| [`Item`](../modules/abstract_loader.md#item)\>

The loaded spotify resource.

#### Defined in

[SpotifyManager.ts:170](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L170)

___

### makeRequest

▸ **makeRequest**<`T`\>(`endpoint`, `prefixBaseUrl?`): `Promise`<`T`\>

Makes a request to the spotify api.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Dictionary`<`any`\>`Dictionary`<`any`\> |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` | If prefixing with the base url, the endpoint. Or full URL. |
| `prefixBaseUrl` | `boolean` | `true` | Whether to prefix the endpoint with the api base url. |

#### Returns

`Promise`<`T`\>

#### Defined in

[SpotifyManager.ts:150](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L150)

___

### renew

▸ **renew**(): `Promise`<`void`\>

Requests the spotify token and schedules to renew it.

#### Returns

`Promise`<`void`\>

#### Defined in

[SpotifyManager.ts:205](https://github.com/Lavaclient/plugins/blob/9c6d497/packages/spotify/src/SpotifyManager.ts#L205)
