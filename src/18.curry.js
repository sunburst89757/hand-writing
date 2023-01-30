/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-01-30 21:25:31
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-01-30 21:45:49
 * @Description: 函数的柯里化
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */
function curry(func) {
  return function curried(...args) {
    // 传入参数的长度大于 实际函数可以接收的参数的长度时 就立即执行
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      // 不然的话就继续返回一个函数，这个函数还可以接收参数
      return function (...args2) {
        // 将之前传入的参数和新传入的参数加入一起传递
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  const res = a + b + c;
  console.log(res);

  return res;
}

const curried = curry(sum);

curried(1)(2)(3);
curried(1, 2, 3);
curried(1)(2, 3);
