/**
 * @name 从数组中随机取出一个元素
 * @group 随机函数
 * @param arr 任意数组
 * @example
 * ``` ts
 * import { getRandomArrayItem } from 'tianjie';
 * getRandomArrayItem([1, 2, 3, 4, 5])  // 可能输出1,2,3,4,5中的任意一个
 * ```
 */
export const getRandomArrayItem = <T>(arr: T[]): T | undefined => {
  // 获取数组的长度
  const len = arr.length;
  // 如果数组为空，返回undefined
  if (len === 0) {
    return undefined;
  }
  // 生成一个随机的索引值，范围是[0, len-1]
  const index = Math.floor(Math.random() * len);
  // 返回数组中对应的元素
  return arr[index];
};

/**
 * @name 从数组中取出一个随机的索引
 * @group 随机函数
 * @param arr 任意数组
 * @returns
 * @example
 * ``` ts
 * import { getRandomArrayIndex } from 'tianjie';
 * getRandomArrayIndex(['aaa', 'bbb', 'ccc']) // 0 or 1 or 2
 * ```
 */
export const getRandomArrayIndex = (arr: any[]) => {
  // 获取数组的长度
  const len = arr.length;
  // 如果数组为空，返回undefined
  if (len === 0) {
    return undefined;
  }
  // 生成一个随机的索引值，范围是[0, len-1]
  const index = Math.floor(Math.random() * len);
  return index;
};
