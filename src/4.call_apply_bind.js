// call apply bind都是用来改变this指向的
// call apply第一个参数都是绑定this call接收参数,是剩余参数的形式 apply接收的参数是以数组形式存放
// bind是生成一个绑定了this的新函数
// call 手写 接收到的参数直接一直写即可
Function.prototype.MyCall = function (thisArg, ...args) {
  // 找到原函数 fn.Mycall() 所以MyCall内部的this就是fn
  const fn = this;
  // 边界条件 null undefined绑定的就是window对象 其它的值就构成一个对象
  thisArg = thisArg ? Object(thisArg) : window;
  // 绑定新的this
  thisArg.fn = fn;
  // 通过thisArg调用fn，fn内部的this指向已经改变了
  const res = thisArg.fn(...args);
  //  删除多余的fn属性在thisArg对象上
  delete thisArg.fn;
  return res;
};
// apply手写 args是一个数组 就是将fn函数接收的所有参数写到数组内部
Function.prototype.MyApply = function (thisArg, args) {
  const fn = this;
  thisArg = thisArg ? Object(thisArg) : window;
  thisArg.fn = fn;
  const res = thisArg.fn(...args);
  delete thisArg.fn;
  return res;
};
function a(...args) {
  console.log(this, ...args);
}
//  bind手写 返回一个绑定this的函数
Function.prototype.MyBind = function (thisArg, ...argArr) {
  const fn = this;
  thisArg = thisArg ? Object(thisArg) : window;
  //  调用的时候才能确定this 所以在生成的函数里面进行函数的执行
  return function (...args) {
    const finnalArr = [...argArr, ...args];
    thisArg.fn = fn;
    const res = thisArg.fn(...finnalArr);
    delete thisArg.fn;
    return res;
  };
};
a.MyCall("123", 1, 2, 3);
a.MyApply("123", [1, 2, 3]);
const newA = a.MyBind("123", 1, 2);
newA(3);
