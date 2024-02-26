# Function: debounce

▸ **debounce**(`fn`, `wait?`, `options?`, `callback?`): (`this`: `any`, ...`arg`: `any`[]) => `void`

## 防抖函数
 #### 示例
 ```ts
const foo = () => {
  console.log('test');
  return 'hello';
};
const _foo = debounce(foo, 400);
_foo()
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fn` | (...`arg`: `any`) => `void` | `undefined` | 需要防抖的函数 |
| `wait` | `number` | `0` | 等待时间, 单位毫秒, 默认值`0` |
| `options` | [`DebounceOptions`](../types/DebounceOptions.md) | `{}` | 执行选项, 默认值 `{ leading = false, trailing = true }` |
| `callback?` | (`result`: `any`) => `void` | `undefined` | 回调函数, 用来拿到函数执行的返回值 |

#### Returns

`fn`

返回新的函数用于在事件中执行

▸ (`this`, `...arg`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `any` |
| `...arg` | `any`[] |

##### Returns

`void`

#### Defined in

[modules/function/index.ts:20](https://github.com/loclink/tianjie/blob/f0b1650/src/modules/function/index.ts#L20)
