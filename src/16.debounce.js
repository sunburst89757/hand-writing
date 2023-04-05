/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-01-30 20:39:46
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-04-05 16:17:40
 * @Description: 防抖：n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */

// 立即执行
function debounce(time, fn, immediate = false) {
  let timer = null;
  return function (...args) {
    // 反复触发会清除上一次的定时器 执行下一次的定时器
    if (immediate) {
      let callNow = !timer;
      if (timer) clearTimeout(timer);
      //   time后 callNow 为true
      timer = setTimeout(() => {
        timer = null;
      }, time);
      if (callNow) fn.call(this, ...args);
    } else {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn.call(this, ...args);
      }, time);
    }
  };
}
