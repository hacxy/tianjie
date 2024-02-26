# Function: mergeDeep

▸ **mergeDeep**<`T`, `U`\>(`target`, `source`): `T` & `U`

## 对象合并
将对象递归合并. 对于数组和其他类型的值，它会直接覆盖, 该方法返回一个新的对象, 不会修改原始目标对象和源对象.
 #### 示例
 ```ts
import { mergeDeep } from 'tianjie';
mergeDeep({ a: 1, b: 'hello' }, {a: 2, c: 'loclink' }) // {a: 2, b: 'hello', c: 'loclink'}

```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`ObjectType`](../types/ObjectType.md) |
| `U` | [`ObjectType`](../types/ObjectType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `source` | `U` |

#### Returns

`T` & `U`

#### Defined in

[modules/object/index.ts:18](https://github.com/loclink/tianjie/blob/30c59cc/src/modules/object/index.ts#L18)
