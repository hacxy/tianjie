# Function: getRandomNum

▸ **getRandomNum**(`Min`, `Max`): `number`

## 特定范围内取一个随机整数
 #### 示例
 ``` ts
import { getRandomNum } from 'tianjie';
getRandomNum(5, 10)  // 可能输出 5 - 10之间的任意一个随机数, 包含5和10
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Min` | `number` | 范围最小值 |
| `Max` | `number` | 范围最大值 |

#### Returns

`number`

返回值是一个随机整数

#### Defined in

[modules/number/index.ts:13](https://github.com/loclink/tianjie/blob/fc91c50/src/modules/number/index.ts#L13)
