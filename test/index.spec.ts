import { expect, test } from 'vitest';
import { formatInitialCapital, objectToQuery, getRandomArrayItem } from '../src';

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
//  --
