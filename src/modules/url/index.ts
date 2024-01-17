import type { ParamsObject } from './types';

/**
 * ### 将对象转为query字符串
 * @param obj 需要转换的对象
 * @returns string
 *
 * ### 示例
 * ``` ts
 * import { objectToQuery } from 'tianjie'
 * objectToQuery({name: 'loclink', age: 18}) // => name=loclink&age18
 * ```
 */
export function objectToQuery(obj: object & ParamsObject): string {
  // 定义一个空数组，用来存储键值对
  const pairs: string[] = [];
  // 遍历对象的键
  for (const key in obj) {
    // 获取键对应的值
    const value = obj[key];
    // 将键和值编码并拼接成键值对
    const pair = encodeURIComponent(key) + '=' + encodeURIComponent(value);
    // 将键值对添加到数组中
    pairs.push(pair);
  }
  // 将数组中的元素用&符号连接，并返回结果
  return pairs.join('&');
}
