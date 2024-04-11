**tianjie** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: isObject()

### 是否为普通对象类型
判断一个值是否为普通对象, 不包含数组

<a id="undefined" name="undefined"></a>

> **isObject**(`value`): `value is ObjectType`

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | 任意值 |

## 返回值:

`value is ObjectType`

## Name

是否为普通对象类型
判断一个值是否为普通对象, 不包含数组

## Example

```ts
import { isObject } from 'tianjie';
isObject('asd'); // false
isObject({name: 'loclink'}); // true
```

## Source

[modules/judgment/index.ts:16](https://github.com/hacxy/tianjie/blob/d8e0c69da942f3f57ac0eaed6b9408be5dbb0c36/src/modules/judgment/index.ts#L16)
