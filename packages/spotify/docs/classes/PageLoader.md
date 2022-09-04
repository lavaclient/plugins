[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / PageLoader

# Class: PageLoader

## Table of contents

### Constructors

- [constructor](PageLoader.md#constructor)

### Properties

- [baseUrl](PageLoader.md#baseurl)
- [fetchPage](PageLoader.md#fetchpage)
- [strategy](PageLoader.md#strategy)

### Methods

- [createUrl](PageLoader.md#createurl)
- [load](PageLoader.md#load)
- [createPages](PageLoader.md#createpages)

## Constructors

### constructor

• **new PageLoader**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PageLoaderOptions`](../interfaces/PageLoaderOptions.md) |

#### Defined in

[lib/PageLoader.ts:13](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/PageLoader.ts#L13)

## Properties

### baseUrl

• `Readonly` **baseUrl**: `string`

#### Defined in

[lib/PageLoader.ts:7](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/PageLoader.ts#L7)

___

### fetchPage

• `Readonly` **fetchPage**: (`manager`: [`SpotifyManager`](SpotifyManager.md), `path`: `string`) => `Promise`<[`Track`](../interfaces/Spotify.Track.md)[]\>

#### Type declaration

▸ (`manager`, `path`): `Promise`<[`Track`](../interfaces/Spotify.Track.md)[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`SpotifyManager`](SpotifyManager.md) |
| `path` | `string` |

##### Returns

`Promise`<[`Track`](../interfaces/Spotify.Track.md)[]\>

#### Defined in

[lib/PageLoader.ts:11](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/PageLoader.ts#L11)

___

### strategy

• `Readonly` **strategy**: [`PageLoadingStrategy`](../interfaces/PageLoadingStrategy.md)

#### Defined in

[lib/PageLoader.ts:9](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/PageLoader.ts#L9)

## Methods

### createUrl

▸ `Private` **createUrl**(`resourceId`, `page`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceId` | `string` |
| `page` | `number` |

#### Returns

`string`

#### Defined in

[lib/PageLoader.ts:59](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/PageLoader.ts#L59)

___

### load

▸ **load**(`manager`, `resourceId`, `data`): `Promise`<[`Track`](../interfaces/Spotify.Track.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`SpotifyManager`](SpotifyManager.md) |
| `resourceId` | `string` |
| `data` | [`InitialData`](../interfaces/InitialData.md) |

#### Returns

`Promise`<[`Track`](../interfaces/Spotify.Track.md)[]\>

#### Defined in

[lib/PageLoader.ts:25](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/PageLoader.ts#L25)

___

### createPages

▸ `Static` **createPages**(`trackCount`, `strategy`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `trackCount` | `number` |
| `strategy` | [`PageLoadingStrategy`](../interfaces/PageLoadingStrategy.md) |

#### Returns

`number`[]

#### Defined in

[lib/PageLoader.ts:21](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/PageLoader.ts#L21)
