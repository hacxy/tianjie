import lodash from 'lodash';

/**
 * ### 深度拷贝
 * @group 处理对象
 * @author 曹海
 * @param obj 需要深拷贝的对象
 * @returns 返回拷贝后的对象
 * ### 示例：
 * ``` ts
 * import { cloneDeep } from 'wm-kit'
 *
 * const obj = {x:1}
 * cloneDeep(obj) === obj // => false
 *
 * ```
 */
export const cloneDeep = (obj: Record<string, any>): Record<string, any> => {
  return lodash.cloneDeep(obj);
};
