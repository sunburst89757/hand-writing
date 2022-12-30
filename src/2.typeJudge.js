const a = 123;
const b = "sss";
const c = Symbol();
const d = () => {};
const e = [];
const f = {
  name: "cy",
};
// const g = null;
// console.log(typeof null);
// console.log(e instanceof Array);
class Car {
  constructor() {
    this.car = "xxx";
  }
}
const mn = new Car();
// console.log(mn instanceof Car);
// console.log(f.constructor);
// console.log(e instanceof Array);
// console.log(a.constructor);

console.log(Object.prototype.toString.call(null));

