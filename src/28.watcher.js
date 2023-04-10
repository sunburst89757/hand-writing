//  观察者模式
// 百度面经
/* 
const a = new Observer(()=>{console.log("a")});
const b = new Observer(()=>{console.log("b")});
const pub = new Publisher();
pub.addObserver(a);
pub.addObserver(b);
pub.notify(); // a b
*/
// 发布者
class Publisher {
  constructor() {
    // 收集订阅者
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    const index = this.observers.findIndex((item) => item === observer);
    if (index < 0) return -1;
    this.observers.splice(index, 1);
  }
  //   通知所有订阅者执行操作
  notify() {
    this.observers.forEach((observer) => {
      // 这里最好不要直接调用observer类上的方法直接执行，封装一个update方法更好，传递this可以把发布者传递出来
      observer.update(this);
    });
  }
}
//  订阅者
class Observer {
  constructor(fn) {
    this.fn = fn;
  }
  // 不要不写update方法，直接在notify里调用 observer.fn() 这样很不好
  update(publisher) {
    this.fn();
  }
}

const a = new Observer(() => {
  console.log("a");
});
const b = new Observer(() => {
  console.log("b");
});
const pub = new Publisher();
pub.addObserver(a);
pub.addObserver(b);
pub.notify();
