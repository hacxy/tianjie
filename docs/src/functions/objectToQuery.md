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

## 返回值类型

`string`

## 方法名称

将对象转为query字符串

## 示例

``` ts
import { objectToQuery } from 'tianjie'
objectToQuery({name: 'loclink', age: 18}) // => name=loclink&age18
```

## 查看源码

[modules/object/index.ts:44](https://github.com/hacxy/tianjie/blob/ab406b252bd727d89583a2bd8e45e8529cb4dbc5/src/modules/object/index.ts#L44)
