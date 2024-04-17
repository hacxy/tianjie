/**
 * @name 将英文字符串格式化为首字母大写
 * @group 格式化
 * @param str 需要格式化的英文字符串
 * @returns
 * @example
 * ``` ts
 * import { formatInitialCapital } from 'tianjie'
 * formatInitialCapital('javascript') // => Javascript
 * ````
 */
export const formatInitialCapital = (str: string) => {
  const firstLetter = str.charAt(0).toUpperCase();
  const restOfStr = str.slice(1).toLowerCase();
  return firstLetter + restOfStr;
};

/**
 * @name 获取唯一的uuid
 * @group 字符串
 * @returns 返回唯一的uuid
 * @example
 * ``` ts
 * import { getUUID } from 'tianjie'
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

/**
 *
 * @name 示例方法,说hello
 * @group 字符串
 * @param name 名称
 * @returns
 * @example
 * ``` ts
 * import { sayHello } from 'tianjie'
 * sayHello('Hacxy') // => Hello, Hacxy!
 * ```
 */
export const sayHello = (name: string) => {
  return `Hello, ${name}!`;
};

/**
 * @name 将空格分割的英文字符串转换为小驼峰
 * @group 字符串
 * @param str
 * @returns
 */
export const formatSmallHump = (str: string) => {
  let camelCaseStr = str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
  camelCaseStr = camelCaseStr.charAt(0).toLowerCase() + camelCaseStr.slice(1);

  return camelCaseStr;
};
