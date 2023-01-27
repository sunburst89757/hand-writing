/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-01-27 22:01:33
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-01-27 22:33:53
 * @Description:手写一个new
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */

/**
 * new的执行过程
 * 1. 生成一个空对象
 * 2. 对象的__proto__指向构造函数的prototype
 * 3. 执行构造函数的代码
 * 4. 如果这个函数有返回值并且类型是object 或者 function时 返回函数的返回值，否则就返回obj对象
 */

function _new(fn, ...args) {
  //  创建一个obj对象 它的原型指向fn.prototype
  const obj = Object.create(fn.prototype);
  // 绑定this并执行代码
  const res = fn.call(obj, ...args);
  if (res && (typeof res === "object" || typeof res === "function")) return res;
  return obj;
}

function Create(name) {
  this.name = name;
  return;
}
Create.prototype = {
  eat: function () {
    console.log(this, "eat");
  },
};
const b = new Create("cy");
b.eat();
const c = _new(Create, "cy");
c.eat();
