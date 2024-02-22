/**
 * 防抖函数执行选项类型
 */
export type DebounceOptions = {
  /**
   * 是否立即执行, 默认值: false
   */
  leading?: boolean;
  /**
   * 等待时间结束后是否执行, 默认值: true
   */
  trailing?: boolean;
};

/**
 * 节流函数执行选项类型
 */
export type ThrottleOptions = {
  /**
   * 是否立即执行, 默认值: false
   */
  leading?: boolean;
  /**
   * 等待时间结束后是否执行, 默认值: true
   */
  trailing?: boolean;
};
