/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-01-30 21:15:34
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-01-30 21:24:55
 * @Description: 节流 每delay延迟里只执行一次
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */
function throttle(fn, delay) {
  let timer;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.call(this, ...args);
        // 执行完毕后要手动将timer 清0 ，定时器并不会执行完毕后自动将timer清0
        timer = null;
      }, delay);
    }
  };
}
