[@lavaclient/queue](../README.md) / [Exports](../modules.md) / Song

# Class: Song

## Implements

- `TrackInfo`

## Table of contents

### Constructors

- [constructor](Song.md#constructor)

### Properties

- [author](Song.md#author)
- [identifier](Song.md#identifier)
- [isSeekable](Song.md#isseekable)
- [isStream](Song.md#isstream)
- [length](Song.md#length)
- [position](Song.md#position)
- [requester](Song.md#requester)
- [sourceName](Song.md#sourcename)
- [title](Song.md#title)
- [track](Song.md#track)
- [uri](Song.md#uri)

## Constructors

### constructor

• **new Song**(`track`, `requester?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | `string` \| `Track` |
| `requester?` | `string` |

#### Defined in

[packages/queue/src/lib/Song.ts:18](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Song.ts#L18)

## Properties

### author

• **author**: `string`

#### Implementation of

TrackInfo.author

#### Defined in

[packages/queue/src/lib/Song.ts:10](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Song.ts#L10)

___

### identifier

• **identifier**: `string`

#### Implementation of

TrackInfo.identifier

#### Defined in

[packages/queue/src/lib/Song.ts:9](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Song.ts#L9)

___

### isSeekable

• **isSeekable**: `boolean`

#### Implementation of

TrackInfo.isSeekable

#### Defined in

[packages/queue/src/lib/Song.ts:15](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Song.ts#L15)

___

### isStream

• **isStream**: `boolean`

#### Implementation of

TrackInfo.isStream

#### Defined in

[packages/queue/src/lib/Song.ts:11](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Song.ts#L11)

___

### length

• **length**: `number`

#### Implementation of

TrackInfo.length

#### Defined in

[packages/queue/src/lib/Song.ts:8](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Song.ts#L8)

___

### position

• **position**: `number`

#### Implementation of

TrackInfo.position

#### Defined in

[packages/queue/src/lib/Song.ts:12](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Song.ts#L12)

___

### requester

• `Optional` `Readonly` **requester**: `string`

#### Defined in

[packages/queue/src/lib/Song.ts:6](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Song.ts#L6)

___

### sourceName

• **sourceName**: `string`

#### Implementation of

TrackInfo.sourceName

#### Defined in

[packages/queue/src/lib/Song.ts:16](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Song.ts#L16)

___

### title

• **title**: `string`

#### Implementation of

TrackInfo.title

#### Defined in

[packages/queue/src/lib/Song.ts:13](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Song.ts#L13)

___

### track

• `Readonly` **track**: `string`

#### Defined in

[packages/queue/src/lib/Song.ts:5](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Song.ts#L5)

___

### uri

• **uri**: `string`

#### Implementation of

TrackInfo.uri

#### Defined in

[packages/queue/src/lib/Song.ts:14](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Song.ts#L14)
