[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / SpotifyManagerOptions

# Interface: SpotifyManagerOptions

## Table of contents

### Properties

- [autoResolveYoutubeTracks](SpotifyManagerOptions.md#autoresolveyoutubetracks)
- [client](SpotifyManagerOptions.md#client)
- [loaders](SpotifyManagerOptions.md#loaders)
- [market](SpotifyManagerOptions.md#market)
- [pages](SpotifyManagerOptions.md#pages)
- [searchFormat](SpotifyManagerOptions.md#searchformat)
- [searchPrefix](SpotifyManagerOptions.md#searchprefix)

## Properties

### autoResolveYoutubeTracks

• `Optional` **autoResolveYoutubeTracks**: `boolean`

#### Defined in

[lib/SpotifyManager.ts:251](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L251)

___

### client

• **client**: [`SpotifyClientOptions`](SpotifyClientOptions.md)

#### Defined in

[lib/SpotifyManager.ts:249](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L249)

___

### loaders

• `Optional` **loaders**: [`SpotifyItemType`](../enums/SpotifyItemType.md)[]

#### Defined in

[lib/SpotifyManager.ts:250](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L250)

___

### market

• `Optional` **market**: `string`

#### Defined in

[lib/SpotifyManager.ts:254](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L254)

___

### pages

• `Optional` **pages**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `album?` | [`PageLoadingStrategy`](PageLoadingStrategy.md) |
| `playlist?` | [`PageLoadingStrategy`](PageLoadingStrategy.md) |

#### Defined in

[lib/SpotifyManager.ts:245](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L245)

___

### searchFormat

• `Optional` **searchFormat**: `string`

#### Defined in

[lib/SpotifyManager.ts:253](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L253)

___

### searchPrefix

• `Optional` **searchPrefix**: [`SearchPrefix`](../modules.md#searchprefix)

#### Defined in

[lib/SpotifyManager.ts:252](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/SpotifyManager.ts#L252)
