# Function: isObject

▸ **isObject**(`value`): value is ObjectType

## 是否为普通对象类型
判断一个值是否为普通对象, 不包含数组
 #### 示例
 ```ts
import { isObject } from 'tianjie';
isObject('asd'); // false
isObject({name: 'loclink'}); // true
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | 任意值 |

#### Returns

value is ObjectType

#### Defined in

[modules/judgment/index.ts:16](https://github.com/loclink/tianjie/blob/e41a67e/src/modules/judgment/index.ts#L16)
