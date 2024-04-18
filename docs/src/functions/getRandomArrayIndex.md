**tianjie** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: getRandomArrayIndex()

### 从数组中取出一个随机的索引

<a id="undefined" name="undefined"></a>

> **getRandomArrayIndex**(`arr`): `undefined` \| `number`

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `arr` | `any`[] | 任意数组 |

## 返回值类型

`undefined` \| `number`

## 方法名称

从数组中取出一个随机的索引

## 示例

``` ts
import { getRandomArrayIndex } from 'tianjie';
getRandomArrayIndex(['aaa', 'bbb', 'ccc']) // 0 or 1 or 2
```

## 查看源码

[modules/array/index.ts:35](https://github.com/hacxy/tianjie/blob/3a3f9f626d27cf04a1fdcea3cadef8bda0e494f2/src/modules/array/index.ts#L35)
