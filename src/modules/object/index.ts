import { isObject } from '@/modules/judgment';
import { ObjectType } from '@/modules/object/types';

/**
 * @name 对象合并
 * 将对象递归合并. 对于数组和其他类型的值，它会直接覆盖, 该方法返回一个新的对象, 不会修改原始目标对象和源对象.
 * @group 对象
 * @param target
 * @param source
 * @returns
 * @example
 * ```ts
 * import { mergeDeep } from 'tianjie';
 * mergeDeep({ a: 1, b: 'hello' }, {a: 2, c: 'loclink' }) // {a: 2, b: 'hello', c: 'loclink'}
 *
 * ```
 */
export const mergeDeep = <T = ObjectType, U = ObjectType>(target: T, source: U): T & U => {
  const output = Object.assign({}, target) as T & U; // 浅拷贝
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject((source as any)[key])) {
        if (!(key in target)) Object.assign(output as ObjectType, { [key]: (source as any)[key] });
        else (output as any)[key] = mergeDeep((target as any)[key], (source as any)[key]);
      } else {
        Object.assign(output as ObjectType, { [key]: (source as any)[key] });
      }
    });
  }
  return output;
};

/**
 * @name 将对象转为query字符串
 * @param obj 需要转换的对象
 * @group 实用方法
 * @returns
 * @example
 * ``` ts
 * import { objectToQuery } from 'tianjie'
 * objectToQuery({name: 'loclink', age: 18}) // => name=loclink&age18
 * ```
 */
export function objectToQuery(obj: ObjectType): string {
  if (!isObject(obj)) return obj;
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
export type * from './types';
