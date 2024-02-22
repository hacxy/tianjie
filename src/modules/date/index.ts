/**
 * @name 获取毫秒级时间戳
 * 获取当前时间戳, 单位为毫秒
 * @group 时间
 * @example
 * ``` ts
 * import { getTimestamp } from 'tianjie';
 * getTimestamp()
 * ```
 */
export const getTimestamp = () => {
  return Date.now();
};

/**
 * @name 获取秒级时间戳
 * 获取当前时间戳, 单位为秒
 * @group 时间
 * @example
 * ``` ts
 * import { getTimestampInSeconds } from 'tianjie';
 * getTimestampInSeconds()
 * ```
 */
export const getTimestampInSeconds = () => {
  return Math.floor(Date.now() / 1000);
};
