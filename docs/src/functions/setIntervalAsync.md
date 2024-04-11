**tianjie** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: setIntervalAsync()

### 可同步执行的定时器
setInterval的同步版, 需要执行的函数可以是一个Promise, 循环执行过程是同步的

<a id="undefined" name="undefined"></a>

> **setIntervalAsync**(`fn`, `interval`): `object`

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `fn` | (...`arg`) => `Promise`\<`void`\> | 需要定时执行的方法, 不丢失this |
| `interval` | `number` | 执行间隔时长 单位毫秒 |

## 返回值:

`object`

返回一个播放器对象, 提供一个start方法和一个stop方法

`start: () => Promise<void>` - 开始执行定时器
`stop: () => void` - 停止定时器

| Member | Type | Value |
| :------ | :------ | :------ |
| `start` | () => `Promise`\<`void`\> | - |
| `stop` | () => `void` | - |

## Name

可同步执行的定时器
setInterval的同步版, 需要执行的函数可以是一个Promise, 循环执行过程是同步的

## Source

[modules/function/index.ts:136](https://github.com/hacxy/tianjie/blob/d8e0c69da942f3f57ac0eaed6b9408be5dbb0c36/src/modules/function/index.ts#L136)
