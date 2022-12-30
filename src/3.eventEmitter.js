//  发布订阅模式
class EventEmitter {
  constructor() {
    this.queue = {};
  }
  on(name, fn) {
    this.queue[name] = [];
    this.queue[name].push(fn);
  }
  off(name, fn) {
    if (this.queue[name] === undefined) return;
    const index = this.queue[name].indexOf(fn);
    this.queue[name].splice(index, 1);
  }
  trigger(name, ...args) {
    if (this.queue[name] === undefined) return;
    this.queue[name].forEach((fn) => {
      fn.call(undefined, ...args);
    });
  }
}
const e = new EventEmitter();
const sayhi = (...args) => {
  console.log(...args);
};
e.on("xxx", sayhi);
// e.off("xxx", sayhi);
setTimeout(() => {
  e.trigger("xxx", 1, 2, 3);
}, 3000);
