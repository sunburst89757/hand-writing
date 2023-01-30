/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2022-12-30 22:04:46
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-01-30 20:37:52
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
}
const e = new EventEmitter();
const sayhi = (...args) => {
  console.log(...args);
};
e.on("xxx", sayhi);
// e.off("xxx", sayhi);
setTimeout(() => {
  e.trigger("xxx", 1, 2, 3);
}, 3000);
