**tianjie** • [Readme](../README.md) \| [API](../globals.md)

***

# 类型别名: ThrottleType()

<a id="undefined" name="undefined"></a>

> **ThrottleType**: \<`T`\>(`func`, `wait`?, `options`?) => (...`arg`) => `any` \| (...`arg`) => `Promise`\<`any`\>

## 类型参数

| 类型参数 |
| :------ |
| `T` extends (...`args`) => `any` |

## 参数

| 参数 | Type |
| :------ | :------ |
| `func` | `T` |
| `wait`? | `number` |
| `options`? | [`ThrottleSettings`](../interfaces/ThrottleSettings.md) |

## 返回值类型

(...`arg`) => `any` \| (...`arg`) => `Promise`\<`any`\>

## 查看源码

[modules/function/types.ts:10](https://github.com/hacxy/tianjie/blob/ab406b252bd727d89583a2bd8e45e8529cb4dbc5/src/modules/function/types.ts#L10)
