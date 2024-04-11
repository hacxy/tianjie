**tianjie** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: isString()

### 是否为字符串类型
判断一个值是否为字符串

<a id="undefined" name="undefined"></a>

> **isString**(`value`): `value is string`

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | 任意值 |

## 返回值:

`value is string`

## Name

是否为字符串类型
判断一个值是否为字符串

## Example

```ts
import { isString } from 'tianjie';
isString({name: 'loclink'}); // false
isString('hello'); // true
```

## Source

[modules/judgment/index.ts:33](https://github.com/hacxy/tianjie/blob/d8e0c69da942f3f57ac0eaed6b9408be5dbb0c36/src/modules/judgment/index.ts#L33)
