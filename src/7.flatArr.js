/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-01-26 21:47:19
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-01-27 12:06:13
 * @Description: 多维数组拍平
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */
/**
 * @description: 直接拍平到一维
 * @param {*} arr
 * @return {*} []
 */
function flatArr(arr) {
  //  初始pre是一个[] 数组拼接下一个即可
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatArr(cur) : cur);
  }, []);
}

/**
 * @description: 添加指定深度进行拍平
 * @param {*} arr
 * @param {*} depth
 * @return {*}
 */
function flatJs(arr, depth = 1) {
  if (depth <= 0) return arr;
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatJs(cur, depth - 1) : cur);
  }, []);
}
const array = [1, 2, [3, 4, [5, 6], 7], 8, 9];
const newArray1 = array.flat(2); // 等价于array.flat(1)；降1维
const a = flatArr(array);
console.log(array);
console.log(flatJs(array, 1));
console.log(newArray1);
// console.log(a);
