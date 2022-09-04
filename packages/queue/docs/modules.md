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
- [QueueOptions](interfaces/QueueOptions.md)

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

[packages/queue/src/lib/Queue.ts:196](https://github.com/lavaclient/plugins/blob/072af81/packages/queue/src/lib/Queue.ts#L196)

## Variables

### \_queue

• `Const` **\_queue**: unique `symbol`

#### Defined in

[packages/queue/src/lib/Plugin.ts:5](https://github.com/lavaclient/plugins/blob/072af81/packages/queue/src/lib/Plugin.ts#L5)

## Functions

### load

▸ **load**(`createQueue?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `createQueue` | (`player`: `Player`<`Node`\>) => [`Queue`](classes/Queue.md) | `defaultCreateQueue` |

#### Returns

`void`

#### Defined in

[packages/queue/src/lib/Plugin.ts:11](https://github.com/lavaclient/plugins/blob/072af81/packages/queue/src/lib/Plugin.ts#L11)
