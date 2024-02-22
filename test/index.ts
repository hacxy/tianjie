import { debounce } from '../src/modules/function';

const foo = () => {
  console.log('test');
  return 'hello';
};
const _foo = debounce(foo, 400);

const res = _foo();
// setTimeout(() => {
// }, 400);
// setInterval(() => {
//   _foo();
// }, 200);
console.log(res);
