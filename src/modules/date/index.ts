/**
 * ### 获取毫秒级时间戳
 * @group 时间
 * @returns 时间戳,单位是毫秒
 *
 * ### 示例
 * ``` ts
 * import { getTimestamp } from 'tianjie';
 * getTimestamp()
 * ```
 */
export const getTimestamp = () => {
  return Date.now();
};

/**
 * ### 获取秒级时间戳
 * @group 时间
 * @returns 时间戳,单位是秒
 *
 * ### 示例：
 * ``` ts
 * import { getTimestampInSeconds } from 'tianjie';
 * getTimestampInSeconds()
 * ```
 */
export const getTimestampInSeconds = () => {
  return Math.floor(Date.now() / 1000);
};
