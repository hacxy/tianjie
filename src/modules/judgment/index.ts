import { ObjectType } from '@/index';

/**
 * @name 是否为普通对象
 * 判断一个值是否为普通对象, 不包含数组
 * @group 类型判断
 * @param value 任意值
 * @returns
 * @example
 * ```ts
 * import { isObject } from 'tianjie';
 * isObject('asd'); // false
 * isObject({name: 'loclink'}); // true
 * ```
 */
export const isObject = (value: any): value is ObjectType => {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
};

/**
 * @name 是否为字符串
 * 判断一个值是否为字符串
 * @group 类型判断
 * @param value 任意值
 * @return
 * @example
 * ```ts
 * import { isString } from 'tianjie';
 * isString({name: 'loclink'}); // false
 * isString('hello'); // true
 * ```
 */
export const isString = (value: any): value is string => {
  return typeof value === 'string';
};
