[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / PageLoaderOptions

# Interface: PageLoaderOptions

## Table of contents

### Properties

- [baseUrl](PageLoaderOptions.md#baseurl)
- [fetchPage](PageLoaderOptions.md#fetchpage)
- [strategy](PageLoaderOptions.md#strategy)

## Properties

### baseUrl

• **baseUrl**: `string`

#### Defined in

[lib/PageLoader.ts:68](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/PageLoader.ts#L68)

___

### fetchPage

• **fetchPage**: (`manager`: [`SpotifyManager`](../classes/SpotifyManager.md), `path`: `string`) => `Promise`<[`Track`](Spotify.Track.md)[]\>

#### Type declaration

▸ (`manager`, `path`): `Promise`<[`Track`](Spotify.Track.md)[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`SpotifyManager`](../classes/SpotifyManager.md) |
| `path` | `string` |

##### Returns

`Promise`<[`Track`](Spotify.Track.md)[]\>

#### Defined in

[lib/PageLoader.ts:70](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/PageLoader.ts#L70)

___

### strategy

• **strategy**: [`PageLoadingStrategy`](PageLoadingStrategy.md)

#### Defined in

[lib/PageLoader.ts:69](https://github.com/lavaclient/plugins/blob/072af81/packages/spotify/src/lib/PageLoader.ts#L69)
