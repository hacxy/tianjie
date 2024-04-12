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

## 方法名称

是否为普通对象类型
判断一个值是否为普通对象, 不包含数组

## 示例

```ts
import { isObject } from 'tianjie';
isObject('asd'); // false
isObject({name: 'loclink'}); // true
```

## 查看源码

[modules/judgment/index.ts:16](https://github.com/hacxy/tianjie/blob/32d17b0fb1c41747dfab8feb61e15c433f68f661/src/modules/judgment/index.ts#L16)
