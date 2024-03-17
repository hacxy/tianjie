# Function: getRandomArrayItem

▸ **getRandomArrayItem**<`T`\>(`arr`): `undefined` \| `T`

## 从数组中随机取出一个元素
 #### 示例
 ``` ts
import { getRandomArrayItem } from 'tianjie';
getRandomArrayItem([1, 2, 3, 4, 5])  // 可能输出1,2,3,4,5中的任意一个
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | 任意数组 |

#### Returns

`undefined` \| `T`

#### Defined in

[modules/array/index.ts:11](https://github.com/hacxy/tianjie/blob/4e0d707/src/modules/array/index.ts#L11)
