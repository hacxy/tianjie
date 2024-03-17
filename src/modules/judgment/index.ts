import { ObjectType } from '@/index';

/**
 * @name 是否为普通对象类型
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
 * @name 是否为字符串类型
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

/**
 * @name 是否为数字类型
 * 判断一个值是否为数字类型, 包含infinity(无穷大)和-infinity(负无穷大)以及NaN
 * @param value
 * @group 类型判断
 * @returns
 */
export const isNumber = (value: any): value is number => {
  return typeof value === 'number' || value instanceof Number;
};

/**
 * @name 是否为数组类型
 * 判断一个值是否为数组类型
 * @group 类型判断
 * @param value 任意值
 * @returns
 */
export const isArray = (value: any): value is Array<any> => {
  return Array.isArray(value);
};

/**
 * @name 是否为布尔类型
 * 判断一个值是否为boolean类型
 * @group 类型判断
 * @param value 任意值
 * @returns
 */
export const isBoolean = (value: any): value is boolean => {
  return typeof value === 'boolean';
};

/**
 * @name 是否为函数类型
 * 判断一个值是否为Function类型
 * @group 类型判断
 * @param value 任意值
 * @returns
 */
export const isFunction = (value: any): value is Function => {
  return typeof value === 'function';
};

/**
 * @name 判断一个值的类型
 * 判断类型, 传入一个任意类型的值, 返回这个值的类型字符串值, 当判断不出这个值的类型时返回undefined
 * @param value 任意值
 * @group 类型判断
 * @returns
 */
export const is = (value: any) => {
  switch (typeof value) {
    case 'function':
      return 'function';
    case 'boolean':
      return 'boolean';
    case 'string':
      return 'string';
  }

  if (value !== null && typeof value === 'object' && !Array.isArray(value)) return 'object';
  else if (Array.isArray(value)) return 'array';
  else if (typeof value === 'number' || value instanceof Number) return 'number';
};
