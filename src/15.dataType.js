/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-01-29 22:18:31
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-01-29 22:22:54
 * @Description:
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */
// Object.prototype.toString 可以判断数据类型 但是不直接使用 data.toStrng是因为 多数数据类型重写了这种方法,所以使用call调用
// 原生上的方法
const judge = (data) => {
  return Object.prototype.toString.call(data);
};
class A {}
const a = new A();
console.log(judge({}));
console.log(judge([]));
console.log(judge(Math));
console.log(judge(Symbol()));
