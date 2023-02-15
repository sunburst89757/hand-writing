/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2022-12-30 22:04:46
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-02-15 09:43:46
 * @Description:
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */
//  发布订阅模式
class EventEmitter {
  constructor() {
    this.queue = {};
  }
  on(name, fn) {
    if (this.queue[name] === undefined) {
      this.queue[name] = [];
    }
    this.queue[name].push(fn);
  }
  off(name, fn) {
    if (this.queue[name] === undefined) return;
    const index = this.queue[name].indexOf(fn);
    this.queue[name].splice(index, 1);
  }
  trigger(name, ...args) {
    if (this.queue[name] === undefined) return;
    this.queue[name].forEach((fn) => {
      fn.call(undefined, ...args);
    });
  }
  //  注册单次监听器
  once(name, fn) {
    const warapper = (...args) => {
      fn.call(undefined, ...args);
      this.off(name, warapper);
    };
    this.on(name, warapper);
  }
}
const e = new EventEmitter();
const sayhi = (...args) => {
  console.log(...args);
};
e.once("xxx", sayhi);
// e.off("xxx", sayhi);
e.trigger("xxx", 1, 2, 3);

e.trigger("xxx", 78);
