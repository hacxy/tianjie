**tianjie** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: mergeDeep()

### 对象合并
将对象递归合并. 对于数组和其他类型的值，它会直接覆盖, 该方法返回一个新的对象, 不会修改原始目标对象和源对象.

<a id="undefined" name="undefined"></a>

> **mergeDeep**\<`T`, `U`\>(`target`, `source`): `T` & `U`

## 类型参数

| 类型参数 | Value |
| :------ | :------ |
| `T` | [`ObjectType`](../type-aliases/ObjectType.md) |
| `U` | [`ObjectType`](../type-aliases/ObjectType.md) |

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` |  |
| `source` | `U` |  |

## 返回值:

`T` & `U`

## 方法名称

对象合并
将对象递归合并. 对于数组和其他类型的值，它会直接覆盖, 该方法返回一个新的对象, 不会修改原始目标对象和源对象.

## 示例

```ts
import { mergeDeep } from 'tianjie';
mergeDeep({ a: 1, b: 'hello' }, {a: 2, c: 'loclink' }) // {a: 2, b: 'hello', c: 'loclink'}

```

## 查看源码

[modules/object/index.ts:18](https://github.com/hacxy/tianjie/blob/245b0df79651d6de91859938cd5e7b7a04797496/src/modules/object/index.ts#L18)
