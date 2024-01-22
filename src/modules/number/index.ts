/**
 * ### 特定范围内取一个随机整数
 * @param Min 范围最小值
 * @param Max 范围最大值
 * @returns 随机数
 *
 * ### 示例：
 * ``` ts
 * getRandomNum(5, 10)  // 可能输出 5 - 10之间的任意一个随机数, 包含5和10
 * ```
 */
export function getRandomNum(Min: number, Max: number): number {
  const Range = Max - Min;
  const Rand = Math.random();
  return Min + Math.round(Rand * Range);
}
