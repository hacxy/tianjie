**tianjie** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: getRandomNum()

### 特定范围内取一个随机整数

<a id="undefined" name="undefined"></a>

> **getRandomNum**(`Min`, `Max`): `number`

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `Min` | `number` | 范围最小值 |
| `Max` | `number` | 范围最大值 |

## 返回值:

`number`

返回值是一个随机整数

## 方法名称

特定范围内取一个随机整数

## 示例

``` ts
import { getRandomNum } from 'tianjie';
getRandomNum(5, 10)  // 可能输出 5 - 10之间的任意一个随机数, 包含5和10
```

## 查看源码

[modules/number/index.ts:13](https://github.com/hacxy/tianjie/blob/245b0df79651d6de91859938cd5e7b7a04797496/src/modules/number/index.ts#L13)
