/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-02-03 15:56:56
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-02-09 14:14:53
 * @Description: 红绿灯循环切换
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

const redLight = () => {
  console.log("red");
};

const greenLight = () => {
  console.log("green");
};

const yellowLight = () => {
  console.log("yellow");
};

const light = (fn, delay) => {
  return new Promise((resolve) => {
    // 亮灯 然后持续
    fn();
    setTimeout(() => {
      resolve();
    }, delay);
  });
};

// then里面return的内容会别promise包裹 then只起到了监听的作用
const step = () => {
  Promise.resolve()
    .then(() => {
      return light(greenLight, 3000);
    })
    .then(() => {
      return light(yellowLight, 2000);
    })
    .then(() => {
      return light(redLight, 1000);
    })
    .then(() => {
      // 一轮执行完毕后 递归调用
      step();
    });
};
step();
