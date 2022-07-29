[@lavaclient/queue](../README.md) / [Exports](../modules.md) / Queue

# Class: Queue

## Hierarchy

- `TypedEmitter`<[`QueueEvents`](../interfaces/QueueEvents.md)\>

  ↳ **`Queue`**

## Table of contents

### Constructors

- [constructor](Queue.md#constructor)

### Properties

- [current](Queue.md#current)
- [data](Queue.md#data)
- [last](Queue.md#last)
- [loop](Queue.md#loop)
- [player](Queue.md#player)
- [previous](Queue.md#previous)
- [tracks](Queue.md#tracks)
- [defaultMaxListeners](Queue.md#defaultmaxlisteners)

### Methods

- [add](Queue.md#add)
- [addListener](Queue.md#addlistener)
- [clear](Queue.md#clear)
- [emit](Queue.md#emit)
- [eventNames](Queue.md#eventnames)
- [get](Queue.md#get)
- [getMaxListeners](Queue.md#getmaxlisteners)
- [listenerCount](Queue.md#listenercount)
- [listeners](Queue.md#listeners)
- [next](Queue.md#next)
- [off](Queue.md#off)
- [on](Queue.md#on)
- [once](Queue.md#once)
- [prependListener](Queue.md#prependlistener)
- [prependOnceListener](Queue.md#prependoncelistener)
- [rawListeners](Queue.md#rawlisteners)
- [remove](Queue.md#remove)
- [removeAllListeners](Queue.md#removealllisteners)
- [removeListener](Queue.md#removelistener)
- [set](Queue.md#set)
- [setLoop](Queue.md#setloop)
- [setMaxListeners](Queue.md#setmaxlisteners)
- [shuffle](Queue.md#shuffle)
- [skip](Queue.md#skip)
- [sort](Queue.md#sort)
- [start](Queue.md#start)

## Constructors

### constructor

• **new Queue**(`player`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player`<`Node`\> |

#### Overrides

TypedEmitter&lt;QueueEvents\&gt;.constructor

#### Defined in

[packages/queue/src/lib/Queue.ts:26](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L26)

## Properties

### current

• **current**: ``null`` \| [`Song`](Song.md) = `null`

#### Defined in

[packages/queue/src/lib/Queue.ts:23](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L23)

___

### data

• **data**: `Record`<`string`, `any`\> = `{}`

#### Defined in

[packages/queue/src/lib/Queue.ts:24](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L24)

___

### last

• **last**: ``null`` \| [`Song`](Song.md) = `null`

#### Defined in

[packages/queue/src/lib/Queue.ts:22](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L22)

___

### loop

• **loop**: [`Loop`](../interfaces/Loop.md)

#### Defined in

[packages/queue/src/lib/Queue.ts:21](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L21)

___

### player

• `Readonly` **player**: `Player`<`Node`\>

#### Defined in

[packages/queue/src/lib/Queue.ts:26](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L26)

___

### previous

• **previous**: [`Song`](Song.md)[] = `[]`

#### Defined in

[packages/queue/src/lib/Queue.ts:20](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L20)

___

### tracks

• **tracks**: [`Song`](Song.md)[] = `[]`

#### Defined in

[packages/queue/src/lib/Queue.ts:19](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L19)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

TypedEmitter.defaultMaxListeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:10

## Methods

### add

▸ **add**(`songs`, `options?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `songs` | [`Addable`](../modules.md#addable) \| [`Addable`](../modules.md#addable)[] |
| `options` | [`AddOptions`](../interfaces/AddOptions.md) |

#### Returns

`number`

#### Defined in

[packages/queue/src/lib/Queue.ts:134](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L134)

___

### addListener

▸ **addListener**<`U`\>(`event`, `listener`): [`Queue`](Queue.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`QueueEvents`](../interfaces/QueueEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`QueueEvents`](../interfaces/QueueEvents.md)[`U`] |

#### Returns

[`Queue`](Queue.md)

#### Inherited from

TypedEmitter.addListener

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:11

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[packages/queue/src/lib/Queue.ts:96](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L96)

___

### emit

▸ **emit**<`U`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`QueueEvents`](../interfaces/QueueEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `...args` | `Parameters`<[`QueueEvents`](../interfaces/QueueEvents.md)[`U`]\> |

#### Returns

`boolean`

#### Overrides

TypedEmitter.emit

#### Defined in

[packages/queue/src/lib/Queue.ts:123](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L123)

___

### eventNames

▸ **eventNames**<`U`\>(): `U`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`QueueEvents`](../interfaces/QueueEvents.md) |

#### Returns

`U`[]

#### Inherited from

TypedEmitter.eventNames

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:20

___

### get

▸ **get**<`T`\>(): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Returns

`T`

#### Defined in

[packages/queue/src/lib/Queue.ts:180](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L180)

▸ **get**<`T`\>(`key`): ``null`` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| `T`

#### Defined in

[packages/queue/src/lib/Queue.ts:182](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L182)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

TypedEmitter.getMaxListeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:24

___

### listenerCount

▸ **listenerCount**(`type`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | keyof [`QueueEvents`](../interfaces/QueueEvents.md) |

#### Returns

`number`

#### Inherited from

TypedEmitter.listenerCount

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:21

___

### listeners

▸ **listeners**<`U`\>(`type`): [`QueueEvents`](../interfaces/QueueEvents.md)[`U`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`QueueEvents`](../interfaces/QueueEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `U` |

#### Returns

[`QueueEvents`](../interfaces/QueueEvents.md)[`U`][]

#### Inherited from

TypedEmitter.listeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:22

___

### next

▸ **next**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/queue/src/lib/Queue.ts:84](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L84)

___

### off

▸ **off**<`U`\>(`event`, `listener`): [`Queue`](Queue.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`QueueEvents`](../interfaces/QueueEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`QueueEvents`](../interfaces/QueueEvents.md)[`U`] |

#### Returns

[`Queue`](Queue.md)

#### Inherited from

TypedEmitter.off

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:18

___

### on

▸ **on**<`U`\>(`event`, `listener`): [`Queue`](Queue.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`QueueEvents`](../interfaces/QueueEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`QueueEvents`](../interfaces/QueueEvents.md)[`U`] |

#### Returns

[`Queue`](Queue.md)

#### Inherited from

TypedEmitter.on

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:17

___

### once

▸ **once**<`U`\>(`event`, `listener`): [`Queue`](Queue.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`QueueEvents`](../interfaces/QueueEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`QueueEvents`](../interfaces/QueueEvents.md)[`U`] |

#### Returns

[`Queue`](Queue.md)

#### Inherited from

TypedEmitter.once

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:16

___

### prependListener

▸ **prependListener**<`U`\>(`event`, `listener`): [`Queue`](Queue.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`QueueEvents`](../interfaces/QueueEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`QueueEvents`](../interfaces/QueueEvents.md)[`U`] |

#### Returns

[`Queue`](Queue.md)

#### Inherited from

TypedEmitter.prependListener

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:12

___

### prependOnceListener

▸ **prependOnceListener**<`U`\>(`event`, `listener`): [`Queue`](Queue.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`QueueEvents`](../interfaces/QueueEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`QueueEvents`](../interfaces/QueueEvents.md)[`U`] |

#### Returns

[`Queue`](Queue.md)

#### Inherited from

TypedEmitter.prependOnceListener

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:13

___

### rawListeners

▸ **rawListeners**<`U`\>(`type`): [`QueueEvents`](../interfaces/QueueEvents.md)[`U`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`QueueEvents`](../interfaces/QueueEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `U` |

#### Returns

[`QueueEvents`](../interfaces/QueueEvents.md)[`U`][]

#### Inherited from

TypedEmitter.rawListeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:23

___

### remove

▸ **remove**(`song`): ``null`` \| [`Song`](Song.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `song` | [`Song`](Song.md) |

#### Returns

``null`` \| [`Song`](Song.md)

#### Defined in

[packages/queue/src/lib/Queue.ts:100](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L100)

▸ **remove**(`index`): ``null`` \| [`Song`](Song.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`Song`](Song.md)

#### Defined in

[packages/queue/src/lib/Queue.ts:102](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L102)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Queue`](Queue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof [`QueueEvents`](../interfaces/QueueEvents.md) |

#### Returns

[`Queue`](Queue.md)

#### Inherited from

TypedEmitter.removeAllListeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:15

___

### removeListener

▸ **removeListener**<`U`\>(`event`, `listener`): [`Queue`](Queue.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`QueueEvents`](../interfaces/QueueEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`QueueEvents`](../interfaces/QueueEvents.md)[`U`] |

#### Returns

[`Queue`](Queue.md)

#### Inherited from

TypedEmitter.removeListener

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:14

___

### set

▸ **set**<`T`\>(`data?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `T` |

#### Returns

`void`

#### Defined in

[packages/queue/src/lib/Queue.ts:165](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L165)

▸ **set**<`T`\>(`key`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[packages/queue/src/lib/Queue.ts:167](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L167)

___

### setLoop

▸ **setLoop**(`type`, `max?`): [`Queue`](Queue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`LoopType`](../enums/LoopType.md) |
| `max` | `number` |

#### Returns

[`Queue`](Queue.md)

#### Defined in

[packages/queue/src/lib/Queue.ts:145](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L145)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Queue`](Queue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Queue`](Queue.md)

#### Inherited from

TypedEmitter.setMaxListeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:25

___

### shuffle

▸ **shuffle**(): `void`

#### Returns

`void`

#### Defined in

[packages/queue/src/lib/Queue.ts:156](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L156)

___

### skip

▸ **skip**(): `Promise`<``null`` \| [`Song`](Song.md)\>

#### Returns

`Promise`<``null`` \| [`Song`](Song.md)\>

#### Defined in

[packages/queue/src/lib/Queue.ts:75](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L75)

___

### sort

▸ **sort**(`predicate?`): [`Song`](Song.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | (`a`: [`Song`](Song.md), `b`: [`Song`](Song.md)) => `number` |

#### Returns

[`Song`](Song.md)[]

#### Defined in

[packages/queue/src/lib/Queue.ts:152](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L152)

___

### start

▸ **start**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/queue/src/lib/Queue.ts:80](https://github.com/lavaclient/plugins/blob/f4114e8/packages/queue/src/lib/Queue.ts#L80)
