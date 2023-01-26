//  接受多个函数，从右往左执行
function compose(...fns) {
  // 第一个函数的参数有多个
  return function (...args) {
    // reduce的值必须通过return返回
    return fns.reverse().reduce((pre, cur, curIndex) => {
      if (curIndex === 0) {
        return cur(...pre);
      }
      return cur(pre);
      //   初始参数必须是args 才能传递给第一个函数
    }, args);
  };
}
//  例子验证
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11

let sayHello = (...str) => `Hello , ${str.join(" And ")}`;
let toUpper = (str) => str.toUpperCase();
let combin = compose(toUpper, sayHello);

console.log(combin("jack", "bob")); // HELLO , JACK AND BOB
