[@lavaclient/queue](../README.md) / [Exports](../modules.md) / QueueEvents

# Interface: QueueEvents

## Table of contents

### Properties

- [finish](QueueEvents.md#finish)
- [trackEnd](QueueEvents.md#trackend)
- [trackStart](QueueEvents.md#trackstart)

## Properties

### finish

• **finish**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/queue/src/lib/Queue.ts:201](https://github.com/lavaclient/plugins/blob/072af81/packages/queue/src/lib/Queue.ts#L201)

___

### trackEnd

• **trackEnd**: (`song`: [`Song`](../classes/Song.md)) => `void`

#### Type declaration

▸ (`song`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `song` | [`Song`](../classes/Song.md) |

##### Returns

`void`

#### Defined in

[packages/queue/src/lib/Queue.ts:200](https://github.com/lavaclient/plugins/blob/072af81/packages/queue/src/lib/Queue.ts#L200)

___

### trackStart

• **trackStart**: (`song`: [`Song`](../classes/Song.md)) => `void`

#### Type declaration

▸ (`song`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `song` | [`Song`](../classes/Song.md) |

##### Returns

`void`

#### Defined in

[packages/queue/src/lib/Queue.ts:199](https://github.com/lavaclient/plugins/blob/072af81/packages/queue/src/lib/Queue.ts#L199)
