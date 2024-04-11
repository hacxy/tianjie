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

## Name

特定范围内取一个随机整数

## Example

``` ts
import { getRandomNum } from 'tianjie';
getRandomNum(5, 10)  // 可能输出 5 - 10之间的任意一个随机数, 包含5和10
```

## Source

[modules/number/index.ts:13](https://github.com/hacxy/tianjie/blob/d8e0c69da942f3f57ac0eaed6b9408be5dbb0c36/src/modules/number/index.ts#L13)
