/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-01-27 21:41:44
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-01-27 21:45:39
 * @Description: 数组去重
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */

// 1.set 去重
const uniqueArr1 = (arr) => {
  return [...new Set(...arr)];
};

// 2. 遍历去重

const uniqueArr2 = (arr) => {
  const res = [];
  arr.forEach((element) => {
    if (!res.includes(element)) {
      res.push(element);
    }
  });
  return res;
};

// 3. filter

const uniqueArr3 = (arr) => {
  return arr.filter((el, i) => arr.indexOf(el) === i);
};
