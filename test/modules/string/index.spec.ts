import { expect, test } from 'vitest';
import {
  getMonthDays,
  formatInitialCapital,
  formatPhoneNumberAsterisk,
  priceAdd,
  priceSubtract,
  priceMultiply,
  priceDivide,
  formatPrice,
  getPriceInteger,
  getPriceDecimal,
  cloneDeep,
  objectToQuery,
  getRandomElement
} from '../../../src';

test('deepOmitNil', () => {
  expect(getMonthDays('2023-08')).toBe(31);
});

test('formatInitialCapital', () => {
  expect(formatInitialCapital('javascript')).toBe('Javascript');
});

test('formatInitialCapital', () => {
  expect(formatInitialCapital('哈哈哈')).toBe('哈哈哈');
});

test('formatPhoneNumberAsterisk', () => {
  expect(formatPhoneNumberAsterisk('15623977915')).toBe('156****7915');
});

test('priceAdd', () => {
  expect(priceAdd(2.51, 0.01)).toBe(2.52);
});

test('priceSubtract', () => {
  expect(priceSubtract(123.45, 0.1, 0.1)).toBe(123.25);
});

test('priceMultiply', () => {
  expect(priceMultiply(123.45, 0.1)).toBe(12.35);
});

test('priceDivide', () => {
  expect(priceDivide(123.45, 2)).toBe(61.73);
});

test('formatPrice', () => {
  expect(formatPrice(123220, { symbol: '¥', decimal: '.', separator: ',' })).toBe('¥123,220.00');
});

test('getPriceInteger', () => {
  expect(getPriceInteger(23.43)).toBe(23);
});

test('getPriceDecimal', () => {
  expect(getPriceDecimal(23.43)).toBe(43);
});

test('cloneDeep', () => {
  const obj = { x: { y: 5 } };
  expect(cloneDeep(obj) === obj).toBe(false);
});

test('对象转query', () => {
  expect(objectToQuery({ name: 'loclink', age: 18 })).toBe('name=loclink&age=18');
});

test('从数组中取出随机一个值', () => {
  expect(getRandomElement([1, 2, 3, 4, 5])).toEqual(expect.anything());
});
//  --
