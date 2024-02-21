import { ObjectType } from '@/index';

/**
 * ### 判断是否为普通对象, 不包含数组
 * @group 类型判断
 * @param value 任意值
 * @returns
 *
 * ### 示例:
 * ```ts
 * import { isObject } from 'tianjie';
 * isObject('asd'); // false
 * isObject({name: 'loclink'}); // true
 * ```
 */
export const isObject = (value: any): value is ObjectType => {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
};
