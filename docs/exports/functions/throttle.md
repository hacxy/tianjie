# Function: throttle

▸ **throttle**(`fn`, `interval?`, `options?`, `callback`): (`this`: `unknown`, ...`arg`: `any`[]) => `Promise`<`unknown`\>

## 节流函数

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fn` | `any` | `undefined` | 用于节流的函数 |
| `interval` | `number` | `0` | 函数执行间隔时间单位为毫秒, 默认值: `0` |
| `options` | [`ThrottleOptions`](../types/ThrottleOptions.md) | `{}` | 节流函数执行的选项, 默认值: `{ leading: true, trailing: false }` |
| `callback` | (`result`: `any`) => `void` | `undefined` | 回调函数, 用于拿到函数执行的返回值 |

#### Returns

`fn`

返回一个节流函数, 该函数返回一个Promise, 可以在then方法中拿到函数执行的返回值

▸ (`this`, `...arg`): `Promise`<`unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `...arg` | `any`[] |

##### Returns

`Promise`<`unknown`\>

| Name | Type |
| :------ | :------ |
| `cancel` | () => `void` |

#### Defined in

[modules/function/index.ts:74](https://github.com/hacxy/tianjie/blob/4e0d707/src/modules/function/index.ts#L74)
