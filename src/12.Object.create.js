/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-01-28 21:19:21
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-01-28 21:47:41
 * @Description: 手写Object.create(a) --->创建一个新对象 新对象的原型指向a
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */

/**
 * @description: 创建一个新对象 新对象的原型指向obj
 * @param {*} obj
 * @param {*} PropertyDescriptorMap 对象属性描述符
 * @return {*}
 */
function Object_Create(obj, PropertyDescriptorMap) {
  if (typeof obj !== "object" && typeof obj !== "function") {
    throw new TypeError(
      `object prototype may only be an Object or null: ${obj}`
    );
  }
  // 构造函数 借助new 的原理实现 new返回的对象是  构造函数的原型 ，所以给构造函数的原型赋值给obj即可
  function Creator() {}
  Creator.prototype = obj;
  const res = new Creator();
  // 第二个参数就是对象属性描述符 给生成的对象进行属性描述
  if (PropertyDescriptorMap) {
    Object.defineProperties(res, PropertyDescriptorMap);
  }
  return res;
}
