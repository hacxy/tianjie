**tianjie** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: getRandomArrayItem()

### 从数组中随机取出一个元素

<a id="undefined" name="undefined"></a>

> **getRandomArrayItem**\<`T`\>(`arr`): `undefined` \| `T`

## 类型参数

| 类型参数 |
| :------ |
| `T` |

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | 任意数组 |

## 返回值类型

`undefined` \| `T`

## 方法名称

从数组中随机取出一个元素

## 示例

``` ts
import { getRandomArrayItem } from 'tianjie';
getRandomArrayItem([1, 2, 3, 4, 5])  // 可能输出1,2,3,4,5中的任意一个
```

## 查看源码

[modules/array/index.ts:11](https://github.com/hacxy/tianjie/blob/ab406b252bd727d89583a2bd8e45e8529cb4dbc5/src/modules/array/index.ts#L11)
