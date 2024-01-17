import { isChinaPhoneNumber } from '../check';

/**
 * ### 将英文字符串格式化为首字母大写
 * @group 格式化
 * @author 高强
 * @param str 需要格式化的英文字符串
 * @returns
 *
 * ### 示例
 * ``` ts
 * import { formatInitialCapital } from 'wm-kit'
 * formatInitialCapital('javascript') // => Javascript
 * ````
 */
export const formatInitialCapital = (str: string) => {
  const firstLetter = str.charAt(0).toUpperCase();
  const restOfStr = str.slice(1).toLowerCase();
  return firstLetter + restOfStr;
};

/**
 * ### 将手机号中间4位格式化为*
 * @group 格式化
 * @group 实用函数
 * @author 高强
 * @param phoneNumber 手机号 若未通过校验则返回空字符串
 */
export const formatPhoneNumberAsterisk = (phoneNumber: string) => {
  //校验手机号是否正确
  if (isChinaPhoneNumber(phoneNumber)) {
    phoneNumber = phoneNumber.toString(); //先强制转换成字符串类型
    // 使用字符串的 slice 方法，取出手机号的前三位和后四位
    const prefix = phoneNumber.slice(0, 3);
    const suffix = phoneNumber.slice(7);
    // 使用字符串的 repeat 方法，生成四个星号
    const mask = '*'.repeat(4);
    // 使用字符串的 concat 方法，拼接前缀、星号和后缀，返回结果
    return prefix.concat(mask, suffix);
  } else {
    return '';
  }
};

/**
 * ### 获取唯一的uuid
 * @group 字符串
 * @author 曹海
 * @returns 返回唯一的uuid
 *
 * ### 示例
 * ``` ts
 * import { getUUID } from 'wm-kit'
 * getUUID() // => a0c356fa-0edb-48f3-a70d-9004a19a0930
 * ````
 */
export const getUUID = () => {
  let time = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    time += performance.now();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (time + Math.random() * 16) % 16 | 0;
    time = Math.floor(time / 16);
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};
