**tianjie** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: throttle()

### 节流函数

<a id="undefined" name="undefined"></a>

> **throttle**\<`T`\>(`func`, `wait`?, `options`?): (...`arg`) => `any` \| (...`arg`) => `Promise`\<`any`\>

## 类型参数

| 类型参数 |
| :------ |
| `T` extends (...`args`) => `any` |

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | - |
| `wait`? | `number` |  |
| `options`? | [`ThrottleSettings`](../interfaces/ThrottleSettings.md) |  |

## 返回值类型

(...`arg`) => `any` \| (...`arg`) => `Promise`\<`any`\>

## 方法名称

节流函数

## 查看源码

[modules/function/index.ts:12](https://github.com/hacxy/tianjie/blob/ab406b252bd727d89583a2bd8e45e8529cb4dbc5/src/modules/function/index.ts#L12)
