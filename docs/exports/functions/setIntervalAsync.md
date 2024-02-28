# Function: setIntervalAsync

▸ **setIntervalAsync**(`fn`, `interval`): `Object`

## 可同步执行的定时器
setInterval的同步版, 需要执行的函数可以是一个Promise, 循环执行过程是同步的

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (...`arg`: `any`[]) => `void` | 需要定时执行的方法, 不丢失this |
| `interval` | `number` | 执行间隔时长 单位毫秒 |

#### Returns

`Object`

返回一个播放器对象, 提供一个start方法和一个stop方法

`start: () => Promise<void>` - 开始执行定时器

`stop: () => void` - 停止定时器

| Name | Type |
| :------ | :------ |
| `start` | () => `Promise`<`void`\> |
| `stop` | () => `void` |

#### Defined in

[modules/function/index.ts:154](https://github.com/loclink/tianjie/blob/f81e541/src/modules/function/index.ts#L154)
