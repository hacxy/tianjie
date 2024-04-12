**tianjie** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: objectToQuery()

### 将对象转为query字符串

<a id="undefined" name="undefined"></a>

> **objectToQuery**(`obj`): `string`

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`ObjectType`](../type-aliases/ObjectType.md) | 需要转换的对象 |

## 返回值:

`string`

## 方法名称

将对象转为query字符串

## 示例

``` ts
import { objectToQuery } from 'tianjie'
objectToQuery({name: 'loclink', age: 18}) // => name=loclink&age18
```

## 查看源码

[modules/object/index.ts:44](https://github.com/hacxy/tianjie/blob/245b0df79651d6de91859938cd5e7b7a04797496/src/modules/object/index.ts#L44)
