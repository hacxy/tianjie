# Function: objectToQuery

▸ **objectToQuery**(`obj`): `string`

## 将对象转为query字符串
 #### 示例
 ``` ts
import { objectToQuery } from 'tianjie'
objectToQuery({name: 'loclink', age: 18}) // => name=loclink&age18
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`ObjectType`](../types/ObjectType.md) | 需要转换的对象 |

#### Returns

`string`

#### Defined in

[modules/object/index.ts:44](https://github.com/loclink/tianjie/blob/7741f6d/src/modules/object/index.ts#L44)
