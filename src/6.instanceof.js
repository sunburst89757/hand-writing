/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-01-26 21:21:08
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-01-26 21:44:54
 * @FilePath: /hand-writing/src/6.instanceof.js
 * @Description: instanceof手写方法实现
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */

// 判断数据类型使用 一般判断引用数据类型 typeof判断基本数据类型
//  使用方法 : a instanceof b

/**
 * @description:
 * @param {*} L
 * @param {*} R
 * @return {*} true false
 */
function instance_of(L, R) {
  const O = R.prototype;
  L = L.__proto__;
  //   一直向下遍历原型
  while (true) {
    if (L === null) return false;
    if (L === O) return true;
    L = L.__proto__;
  }
}

console.log(instance_of("", Object));
