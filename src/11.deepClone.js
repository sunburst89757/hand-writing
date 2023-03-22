/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-01-28 14:56:00
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-03-22 17:20:48
 * @Description: 深拷贝
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */

/**
 * @description:  深拷贝
 * @param {*} target
 * @param {*} cache 用于解决循环引用的问题
 * @return {*}
 */
function deepClone(target, cache = new WeakMap()) {
  // typeof null === object
  if (typeof target === "object" && target !== null) {
    // 日期处理
    if (target instanceof Date) return new Date(target);
    //  正则处理
    if (target instanceof RegExp) return new RegExp(target);
    // 解决循环引用的问题 使用weakmap是为了方便垃圾回收
    if (cache.has(target)) {
      return cache.get(target);
    }
    const newTarget = Array.isArray(target) ? [] : {};
    cache.set(target, newTarget);
    // for in 循环可以用于object 和 arr; for of 用于可迭代对象
    for (const key in target) {
      newTarget[key] = deepClone(target[key], cache);
    }
    return newTarget;
  }
  return target;
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
  f: {
    f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } },
  },
};

target.target = target;

console.time();
const result1 = deepClone(target);
console.log(result1);
console.timeEnd();
console.log("\n");

result1.field2 = null;

console.log("\n");

console.log(target);

console.log("\n");

console.log(result1);
