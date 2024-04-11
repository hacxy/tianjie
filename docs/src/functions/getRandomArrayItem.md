**tianjie** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: getRandomArrayItem()

### 从数组中随机取出一个元素

<a id="undefined" name="undefined"></a>

> **getRandomArrayItem**\<`T`\>(`arr`): `undefined` \| `T`

## Type parameters

| Type parameter |
| :------ |
| `T` |

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | 任意数组 |

## 返回值:

`undefined` \| `T`

## Name

从数组中随机取出一个元素

## Example

``` ts
import { getRandomArrayItem } from 'tianjie';
getRandomArrayItem([1, 2, 3, 4, 5])  // 可能输出1,2,3,4,5中的任意一个
```

## Source

[modules/array/index.ts:11](https://github.com/hacxy/tianjie/blob/d8e0c69da942f3f57ac0eaed6b9408be5dbb0c36/src/modules/array/index.ts#L11)
