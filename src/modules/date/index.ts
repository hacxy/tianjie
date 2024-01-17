import dayjs from 'dayjs';

/**
 * ### 获取某个月有多少天
 * @group 时间
 * @author 高强
 * @param date 时间，需要查询的年月，可以是字符串也可以是Date类型，不传则查询当前月份
 * @returns
 *
 * ### 示例：
 * ``` ts
 * import { getMonthDays } from 'wm-kit'
 * getMonthDays(new Date('2023-2-1')) // => 28
 * getMonthDays('2023-8')  // => 31
 * getMonthDays('2023-7-1')  // => 31
 * getMonthDays()  // => 31
 * ```
 *
 */
export const getMonthDays = (date?: Date | string | dayjs.Dayjs) => {
  if (date) {
    return dayjs(date).daysInMonth();
  } else {
    return dayjs().daysInMonth();
  }
};

/**
 * ### 获取毫秒级时间戳
 * @author 高强
 * @group 时间
 * @returns
 */
export const getTimestamp = () => {
  return dayjs(new Date()).valueOf();
};
