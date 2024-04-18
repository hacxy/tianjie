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

## 返回值类型

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

[modules/judgment/index.ts:33](https://github.com/hacxy/tianjie/blob/3a3f9f626d27cf04a1fdcea3cadef8bda0e494f2/src/modules/judgment/index.ts#L33)
