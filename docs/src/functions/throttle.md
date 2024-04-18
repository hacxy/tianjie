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

[modules/function/index.ts:12](https://github.com/hacxy/tianjie/blob/3a3f9f626d27cf04a1fdcea3cadef8bda0e494f2/src/modules/function/index.ts#L12)
