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

## 返回值类型

`object`

返回一个播放器对象, 提供一个start方法和一个stop方法

`start: () => Promise<void>` - 开始执行定时器
`stop: () => void` - 停止定时器

| Member | Type | Value |
| :------ | :------ | :------ |
| `start` | () => `Promise`\<`void`\> | - |
| `stop` | () => `void` | - |

## 方法名称

可同步执行的定时器
setInterval的同步版, 需要执行的函数可以是一个Promise, 循环执行过程是同步的

## 查看源码

[modules/function/index.ts:135](https://github.com/hacxy/tianjie/blob/3a3f9f626d27cf04a1fdcea3cadef8bda0e494f2/src/modules/function/index.ts#L135)
