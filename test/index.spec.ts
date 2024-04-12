import { expect, test } from 'vitest';
import { formatInitialCapital, objectToQuery, getRandomArrayItem, isDate } from '../dist';

test('formatInitialCapital', () => {
  expect(formatInitialCapital('javascript')).toBe('Javascript');
});

test('formatInitialCapital', () => {
  expect(formatInitialCapital('哈哈哈')).toBe('哈哈哈');
});

test('对象转query', () => {
  expect(objectToQuery({ name: 'loclink', age: 18 })).toBe('name=loclink&age=18');
});

test('从数组中取出随机一个值', () => {
  expect(getRandomArrayItem([1, 2, 3, 4, 5])).toEqual(expect.anything());
});

test('测试Date类型,输入正确的Date类型,结果为true', () => {
  expect(isDate(new Date())).toBe(true);
});

test('测试Date类型,输入错误的Date类型,结果为false', () => {
  expect(isDate(111)).toBe(false);
});
