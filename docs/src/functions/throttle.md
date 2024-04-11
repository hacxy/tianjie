**tianjie** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: throttle()

### 节流函数

<a id="undefined" name="undefined"></a>

> **throttle**\<`T`\>(`func`, `wait`?, `options`?): (...`arg`) => `void`

## Type parameters

| Type parameter |
| :------ |
| `T` extends (...`args`) => `any` |

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | - |
| `wait`? | `number` |  |
| `options`? | [`ThrottleSettings`](../interfaces/ThrottleSettings.md) |  |

## 返回值:

`Function`

> ### 参数
>
> | 参数 | Type |
> | :------ | :------ |
> | ...`arg` | `any`[] |
>
> ### 返回值:
>
> `void`
>

## Name

节流函数

## Source

[modules/function/index.ts:12](https://github.com/hacxy/tianjie/blob/d8e0c69da942f3f57ac0eaed6b9408be5dbb0c36/src/modules/function/index.ts#L12)
