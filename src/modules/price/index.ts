import currency from 'currency.js';


export const MMCurrency = currency;

export type TParams = number | string;
export interface IFormatPriceConfig {
  /** 金额符号 默认没有 */
  symbol?: string;
  /** 小数点符号 默认是‘.’ */
  decimal?: string;
  /** 分割符号 默认没有 */
  separator?: string;
}

/**
 * ### 数字类型相加
 * @group 价格计算和格式化
 * @author 曹海
 * @param args add(args1,args2,args3,.....) args代表是剩余参数  argsX:number|string
 * @returns 返回number类型的相加值
 * ### 示例：
 * ``` ts
 * import { priceAdd } from 'wm-kit'
 * // 错误用法
 * 2.51 + 0.01 // => 2.5199999999999996
 * // 正确用法
 * priceAdd(2.51, 0.01) // => 2.52
 *
 * ```
 */
export const priceAdd = (...args: TParams[]): number => {
  if (args?.length) {
    const total: number = args.reduce((previousValue: number, currentValue: number | string) => {
      return currency(previousValue).add(currentValue).value;
    }, 0) as number;

    return total;
  } else if (args?.length === 1) {
    return Number(args[0]);
  }

  return 0;
};

/**
 * ### 数字类型相减
 * @group 价格计算和格式化
 * @author 曹海
 * @param args add(args1,args2,args3,.....) args代表是剩余参数  argsX:number|string 第一个参数代表被减数 其他参数代表减数
 * @returns 返回number类型的相减值
 * ### 示例：
 * ``` ts
 * import { priceSubtract } from 'wm-kit'
 * // 错误用法
 * 123.45 - 0.1 // => 123.35000000000001
 * // 正确用法
 * priceSubtract(123.45, 0.1) // => 123.35
 *
 * ```
 */
export const priceSubtract = (...args: TParams[]): number => {
  if (args?.length) {
    const minuend = Number(args[0]);
    const otherArgs = args.splice(1, args.length);
    const total: number = otherArgs.reduce((previousValue: number, currentValue: number | string) => {
      return currency(previousValue).subtract(currentValue).value;
    }, minuend) as number;

    return total;
  } else if (args?.length === 1) {
    return Number(args[0]);
  }
  return 0;
};

/**
 * ### 数字类型相乘
 * @group 价格计算和格式化
 * @author 曹海
 * @param args add(args1,args2,args3,.....) args代表是剩余参数  argsX:number|string
 * @returns 返回number类型的相乘值
 * ### 示例：
 * ``` ts
 * import { priceMultiply } from 'wm-kit'
 * // 错误用法
 * 2.51 * 0.01 // => 0.025099999999999997
 * // 正确用法
 * priceMultiply(2.51, 0.01) // => 0.251
 *
 * ```
 */
export const priceMultiply = (...args: TParams[]): number => {
  if (args?.length) {
    const total: number = args.reduce((previousValue: number, currentValue: number | string) => {
      return currency(previousValue).multiply(currentValue).value;
    }, 1) as number;
    return total;
  } else if (args?.length === 1) {
    return Number(args[0]);
  }

  return 0;
};

/**
 * ### 数字类型相除
 * @group 价格计算和格式化
 * @author 曹海
 * @param args add(args1,args2,args3,.....) args代表是剩余参数  argsX:number|string  第一个参数代表被除数 其他参数代表除数
 * @returns 返回number类型的相除值
 * ### 示例：
 * ``` ts
 * import { priceDivide } from 'wm-kit'
 
 * 
 * priceDivide(123.45, 2) // => 61.73
 *
 * ```
 */
export const priceDivide = (...args: TParams[]): number => {
  if (args?.length) {
    const minuend = Number(args[0]);
    const otherArgs = args.splice(1, args.length);
    const total: number = otherArgs.reduce((previousValue: number, currentValue: number | string) => {
      return currency(previousValue).divide(currentValue || 1).value;
    }, minuend) as number;
    return total;
  } else if (args?.length === 1) {
    return Number(args[0]);
  }

  return 0;
};

/**
 * ### 金额格式化
 * @group 价格计算和格式化
 * @author 曹海
 * @param price 需要格式化的金额 类型为number ｜ string
 * @param config 格式化配置 包含金额符号 小数点符号 分割符号
 * @returns 格式后的金额 字符串类型
 *
 * ### 示例：
 * ```ts
 * import { formatPrice } from 'wm-kit'
 * formatPrice(123220, { symbol: '¥', decimal: '.', separator: ',' } // => ¥123,220.00
 * formatPrice(123220, { decimal: '.', separator: ',' } // => 123,220.00
 * formatPrice(123220, {  separator: '-' } // => 123-220.00
 * formatPrice(123220) // => 123220.00
 * ```
 * ###
 */
export const formatPrice = (price: number | string, config?: IFormatPriceConfig): string => {
  const fn = (value: number | string) =>
    currency(value, {
      symbol: config?.symbol || '',
      decimal: config?.decimal || '.',
      separator: config?.separator || ''
    });
  return fn(price).format();
};

/**
 * ### 获取金额整数部分
 * @group 价格计算和格式化
 * @author 曹海
 * @param price 需要获取整数的金额值 类型为number ｜ string
 * @returns 金额的整数部分
 *
 * ### 示例：
 * ```ts
 * import { getPriceInteger } from 'wm-kit'
 *
 * getPriceInteger(123.45) // => 123
 * getPriceInteger(0.99) // => 0
 * ```
 * ###
 */
export const getPriceInteger = (price: number | string): number => {
  if (!price) {
    return 0;
  }
  return currency(price).dollars();
};

/**
 * ### 获取金额小数部分
 * @group 价格计算和格式化
 * @author 曹海
 * @param price 需要获取小数的金额值 类型为number ｜ string
 * @returns 金额的小数部分
 *
 * ### 示例：
 * ```ts
 * import { getPriceDecimal } from 'wm-kit'
 *
 * getPriceDecimal(123.45) // => 45
 * getPriceDecimal(0.99) // => 99
 * ```
 * ###
 */
export const getPriceDecimal = (price: number | string): number => {
  if (!price) {
    return 0;
  }
  return currency(price).cents();
};



