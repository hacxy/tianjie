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

## Name

将对象转为query字符串

## Example

``` ts
import { objectToQuery } from 'tianjie'
objectToQuery({name: 'loclink', age: 18}) // => name=loclink&age18
```

## Source

[modules/object/index.ts:44](https://github.com/hacxy/tianjie/blob/d8e0c69da942f3f57ac0eaed6b9408be5dbb0c36/src/modules/object/index.ts#L44)
