/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-01-30 21:49:34
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-01-31 22:13:57
 * @Description:列表转树
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */

/**
 * let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
  ]
  =>
  [
    {
        "id": 1,
        "name": "部门1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "部门2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "部门3",
                "pid": 1,
                "children": [
                    // 结果 ,,,
                ]
            }
        ]
    }
  ]
 * 
 * 
 */
// 递归实现
let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];
/**
 * @description:
 * @param {*} arr
 * @param {*} root 区分是否一级节点
 * @return {*}
 */
function list2tree(arr, root) {
  // filter和map都不更改arr的值
  // 先找出一级的 然后再以一级的进行递归
  return arr
    .filter((item) => item.pid === root)
    .map((item) => ({ ...item, children: list2tree(arr, item.id) }));
}

const a = list2tree(arr, 0);
console.log(a);

// 非递归版本
function list2Tree2(arr, root) {
  const map = new Map();
  const result = [];
  //   把所有的item缓存下来
  for (const item of arr) {
    map.set(item.id, { ...item });
  }

  for (const item of arr) {
    if (item.pid === root) {
      // 最外层直接push
      result.push(map.get(item.id));
    } else {
      // 找到父级引用
      const parentItem = map.get(item.pid);
      if (parentItem.children) {
        // 后面就追加
        parentItem.children.push(map.get(item.id));
      } else {
        // 初始化
        parentItem.children = [map.get(item.id)];
      }
    }
  }

  return result;
}

const b = list2Tree2(arr, 0);
console.log(b);
