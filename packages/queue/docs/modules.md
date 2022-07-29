[@lavaclient/queue](README.md) / Exports

# @lavaclient/queue

## Table of contents

### Enumerations

- [LoopType](enums/LoopType.md)

### Classes

- [Queue](classes/Queue.md)
- [Song](classes/Song.md)

### Interfaces

- [AddOptions](interfaces/AddOptions.md)
- [Loop](interfaces/Loop.md)
- [QueueEvents](interfaces/QueueEvents.md)

### Type Aliases

- [Addable](modules.md#addable)

### Variables

- [\_queue](modules.md#_queue)

### Functions

- [load](modules.md#load)

## Type Aliases

### Addable

Ƭ **Addable**: `string` \| `Track` \| [`Song`](classes/Song.md)

#### Defined in

[packages/queue/src/lib/Queue.ts:189](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L189)

## Variables

### \_queue

• `Const` **\_queue**: unique `symbol`

#### Defined in

[packages/queue/src/lib/Plugin.ts:5](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Plugin.ts#L5)

## Functions

### load

▸ **load**(`queueClass?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `queueClass` | typeof [`Queue`](classes/Queue.md) | `Queue` |

#### Returns

`void`

#### Defined in

[packages/queue/src/lib/Plugin.ts:7](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Plugin.ts#L7)
