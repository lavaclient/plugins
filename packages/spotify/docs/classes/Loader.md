[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / Loader

# Class: Loader

## Table of contents

### Constructors

- [constructor](Loader.md#constructor)

### Properties

- [itemType](Loader.md#itemtype)
- [matchers](Loader.md#matchers)

### Methods

- [load](Loader.md#load)
- [match](Loader.md#match)

## Constructors

### constructor

• **new Loader**()

## Properties

### itemType

• `Readonly` `Abstract` **itemType**: [`SpotifyItemType`](../enums/SpotifyItemType.md)

The item type this loads.

#### Defined in

[lib/abstract/Loader.ts:13](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/abstract/Loader.ts#L13)

___

### matchers

• `Readonly` `Abstract` **matchers**: `RegExp`[]

The regex(es) used for matching urls.

#### Defined in

[lib/abstract/Loader.ts:18](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/abstract/Loader.ts#L18)

## Methods

### load

▸ `Abstract` **load**(`manager`, `execArray`): `Promise`<[`Item`](../modules.md#item)\>

Used for loading spotify items.

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`SpotifyManager`](SpotifyManager.md) |
| `execArray` | `RegExpExecArray` |

#### Returns

`Promise`<[`Item`](../modules.md#item)\>

A spotify item (album, playlist, or track)

#### Defined in

[lib/abstract/Loader.ts:24](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/abstract/Loader.ts#L24)

___

### match

▸ **match**(`identifier`): ``null`` \| `RegExpExecArray`

Used for finding this loader.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | The identifier to test. |

#### Returns

``null`` \| `RegExpExecArray`

#### Defined in

[lib/abstract/Loader.ts:34](https://github.com/lavaclient/plugins/blob/122f37d/packages/spotify/src/lib/abstract/Loader.ts#L34)
