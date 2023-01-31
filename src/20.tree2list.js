/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-01-31 22:10:46
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-01-31 22:27:15
 * @Description: 树转列表
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */
const tree2list = (tree) => {
  let list = [];
  let queue = [...tree];

  //   广度遍历 一层一层的遍历
  while (queue.length) {
    // 从前面开始取出节点
    const node = queue.shift();
    const children = node.children;

    if (children.length) {
      queue.push(...children);
    }
    // 删除多余的children树形
    delete node.children;

    list.push(node);
  }

  return list;
};

const arr = [
  {
    id: 1,
    name: "部门1",
    pid: 0,
    children: [
      {
        id: 2,
        name: "部门2",
        pid: 1,
        children: [],
      },
      {
        id: 3,
        name: "部门3",
        pid: 1,
        children: [
          {
            id: 4,
            name: "部门4",
            pid: 3,
            children: [
              {
                id: 5,
                name: "部门5",
                pid: 4,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
const res = tree2list(arr);

console.log(res);
