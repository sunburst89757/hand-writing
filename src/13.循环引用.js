/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-01-28 21:51:06
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-01-29 16:41:40
 * @Description:
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */
// 内部引用外部才会出现循环引用
function isCycling(obj) {
  const cache = new Set();
  const detect = (obj) => {
    if (typeof obj === "object" && typeof obj !== "null") {
      if (cache.has(obj)) return true;
      else cache.add(obj);
      for (const key in obj) {
        isCyclic(obj[key]);
      }
      // 必须删除 因为同层互相引用没有关系 跨层才会有循环引用的问题
      set.delete(obj);
    }
    return false;
  };
  return detect(obj);
}
