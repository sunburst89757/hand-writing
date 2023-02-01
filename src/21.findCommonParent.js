// 寻找两个DOM节点 找出最近的父节点
// 本质即是一个节点的父节点包含另一个节点
/**
 * @description: 寻找两个DOM节点的父节点
 * @param {*} el1
 * @param {*} el2
 * @return {*}
 */
const findCommonParent = (el1, el2) => {
  while (!el1.contains(el2)) el1 = el1.parentNode;
  return el1;
};
