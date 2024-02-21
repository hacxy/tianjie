import { isObject } from '@/modules/judgment';
import { ObjectType } from '@/modules/object/types';

/**
 * ### 对象合并
 * 将对象递归合并. 对于数组和其他类型的值，它会直接覆盖, 该方法返回一个新的对象, 不会修改原始目标对象和源对象.
 * @group 对象
 * @param target
 * @param source
 * @returns
 * ### 示例:
 * ```ts
 * import { mergeDeep } from 'tianjie';
 * mergeDeep({ a: 1, b: 'hello' }, {a: 2, c: 'loclink' }) // {a: 2, b: 'hello', c: 'loclink'}
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

export type * from './types';
