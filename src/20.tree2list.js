/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-01-31 22:10:46
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-01-31 22:13:13
 * @Description: 树转列表
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */
function tree2list(arr) {
  const res = [];
  arr.forEach((item) => {
    if (item.children.length === 0) {
      res.push(item);
    } else {
      tree2list();
    }
  });
}
