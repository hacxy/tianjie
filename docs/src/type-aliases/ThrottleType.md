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

## 返回值:

(...`arg`) => `any` \| (...`arg`) => `Promise`\<`any`\>

## 查看源码

[modules/function/types.ts:10](https://github.com/hacxy/tianjie/blob/245b0df79651d6de91859938cd5e7b7a04797496/src/modules/function/types.ts#L10)