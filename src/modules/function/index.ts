// import { DebounceOptions, ThrottleOptions } from './types';
import { DebounceType, ThrottleType } from '@/modules/function/types';

/**
 * @name 节流函数
 * @group 高阶函数
 * @param fn
 * @param wait
 * @param options
 * @returns
 */
export const throttle: ThrottleType = (fn, wait = 500, options = {}) => {
  const { leading, trailing } = options;

  let lastTime = 0; // 上次调用的时间，初始值为0

  let timer: number | null = null;

  // 在返回的函数中，接收多个参数
  function _throttle(this: ThisParameterType<any>, ...arg) {
    // 方式二：返回一个Promise
    return new Promise((resolve) => {
      const nowTime = new Date().getTime(); // 获取当前时间戳

      // 为了可控第一次是否立即执行，只需要控制lastTime的值即可
      // 使lastTime = nowTime 这样的话 nowTime - lastTime 就等于0了，
      // remainTime就会等于interval，大于零就不会执行函数
      if (!leading && !lastTime) lastTime = nowTime;

      const remainTime = wait - (nowTime - lastTime);

      if (remainTime <= 0) {
        if (timer) {
          clearInterval(timer);
          timer = null;
        }

        // 显示绑定this，将参数传入函数并执行，并拿到执行结果
        const result = fn.apply(this, arg);

        // 方式二：将结果resolve出去
        resolve(result);

        // 将当前时间赋值给上次时间，在下次调用此函数时作为上次时间进行判断
        lastTime = nowTime;
      }

      // 判断末尾时刻是否执行
      if (!timer && remainTime > 0 && trailing) {
        // 如果条件达成则开启一个定时器来处理以下逻辑
        timer = window.setTimeout(() => {
          // 如果leading为true 则 lastTime 为当前时间戳 下次执行时将在起始时刻执行，否则lastTime = 0，下次执行时起始时刻将不会执行
          lastTime = !leading ? 0 : new Date().getTime();

          // 清空定时器
          timer = null;

          // 显示绑定this并 传入参数，拿到执行的结果
          const result = fn.apply(this, arg);

          // 方式一：执行结束后将结果传入回调函数并执行
          // callback && callback(result);

          // 方式二：将结果resolve出去
          resolve(result);
        }, remainTime);
      }
    });
  }

  // 取消末尾时刻的执行
  _throttle.cancel = () => {
    if (timer) clearTimeout(timer);
  };
  return _throttle;
};

/**
 * @name 防抖函数
 * @group 高阶函数
 * @param fn 需要防抖的函数
 * @param wait
 * @param options
 * @returns
 */
export const debounce: DebounceType = (fn, wait = 500, options) => {
  let timer: null | number = null; // 定时器id初始为null
  let isExecute = false; // 记录是否立即执行过

  const { leading = false, trailing = true } = options || {};
  // 返回的函数接收参数
  function _debounce(this: any, ...arg) {
    return new Promise((resolve) => {
      // 如果timer有值则清除定时器
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      // 如果开启立即执行，且立即执行还未执行过，则执行fn
      if (leading && !isExecute) {
        const result = fn.call(this, ...arg);
        // callback && callback(result);
        resolve(result);
        isExecute = true;
      } else {
        timer = window.setTimeout(() => {
          // fn.apply(this, arg)
          if (trailing) {
            const result = fn.call(this, ...arg);
            resolve(result);
          }

          // 重置状态
          isExecute = false;
          timer = null;
        }, wait);
      }
    });
  }
  return _debounce;
};

/**
 * @name 可同步执行的定时器
 * setInterval的同步版, 需要执行的函数可以是一个Promise, 循环执行过程是同步的
 * @group 高阶函数
 * @param fn 需要定时执行的方法, 不丢失this
 * @param interval 执行间隔时长 单位毫秒
 * @returns 返回一个播放器对象, 提供一个start方法和一个stop方法
 *
 * `start: () => Promise<void>` - 开始执行定时器
 * `stop: () => void` - 停止定时器
 */
export const setIntervalAsync = (fn: (...arg: any[]) => Promise<void>, interval: number) => {
  let timer: number | undefined = undefined;
  return {
    start: async function () {
      const runner = async () => {
        if (!timer) return;
        await fn();
        clearTimeout(timer);
        timer = window.setTimeout(runner, interval);
      };
      if (timer) return;
      clearTimeout(timer);
      timer = window.setTimeout(runner, interval);
    },

    stop: function () {
      clearTimeout(timer);
      timer = undefined;
    }
  };
};
export * from './types';
