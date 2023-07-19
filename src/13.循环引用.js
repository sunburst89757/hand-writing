/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-01-28 21:51:06
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-01-29 16:41:40
 * @Description:
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */
// 内部引用外部才会出现循环引用  使用dfs判断
function hasCircularReference(obj) {
  var visited = new Set();

  function dfs(node) {
    if (typeof node === 'object' && node !== null) {
      if (visited.has(node)) {
        return true; // 发现循环引用
      }
      visited.add(node);
      for (var key in node) {
        if (dfs(node[key])) {
          return true; // 发现循环引用
        }
      }
      visited.delete(node);
    }
    return false;
  }

  return dfs(obj);
}
