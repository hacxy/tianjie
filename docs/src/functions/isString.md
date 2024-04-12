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

## 方法名称

是否为字符串类型
判断一个值是否为字符串

## 示例

```ts
import { isString } from 'tianjie';
isString({name: 'loclink'}); // false
isString('hello'); // true
```

## 查看源码

[modules/judgment/index.ts:33](https://github.com/hacxy/tianjie/blob/32d17b0fb1c41747dfab8feb61e15c433f68f661/src/modules/judgment/index.ts#L33)
