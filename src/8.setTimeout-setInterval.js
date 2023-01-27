/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-01-27 20:57:09
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-01-27 21:30:25
 * @Description: setTimeout和setTimeInterval互相实现
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */

// 为什么： setInterval是宏任务，并不是说当过了时间N之后就会执行fn函数，
// 其实是过了时间N后，fn函数才会被放入事件队列中等待执行。此时下一个定时器就会开启计时，
// 所以如果主线程中的任务需要等待的时间特别长，则就会在事件队列中堆积的fn函数特别多，
// 导致最终这些函数都会一起执行。完全没有定时的效果，这就是setInterval的弊端
/**
 * @description: setTimeout实现setInterval
 * @param {*} cb
 * @param {*} interval
 * @return {*}
 */
function mySetInterval(cb, interval) {
  let timer = null;
  function interval(time) {
    cb();
    // 自己调用这个函数即可实现每隔time时间调用
    timer = setTimeout(interval, time);
  }
  interval();
  //  返回一个清除定时器的函数
  return () => {
    clearTimeout(timer);
  };
}

const cancel = mySetInterval(() => {
  console.log(1);
}, 300);

setTimeout(() => {
  cancel();
}, 1000);

/**
 * @description: setInterval实现setTimeout
 * @param {*} cb
 * @param {*} time
 * @return {*}
 */
function mySetTimeout(cb, time) {
  let timer = null;
  timer = setInterval(() => {
    // 执行一次立即清除定时器即可
    clearInterval(timer);
    cb();
  }, time);
  return () => {
    clearInterval(timer);
  };
}
