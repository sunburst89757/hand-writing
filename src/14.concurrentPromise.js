/*
 * @Author: sunburst89757 3520279278@qq.com
 * @Date: 2023-01-29 16:42:56
 * @LastEditors: sunburst89757 3520279278@qq.com
 * @LastEditTime: 2023-01-29 22:09:54
 * @Description:promise的并发控制
 *
 * Copyright (c) 2023 by sunburst89757 3520279278@qq.com, All Rights Reserved.
 */

/*
JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善下面代码的Scheduler类，使以下程序能够正常输出：
class Scheduler {
  add(promiseCreator) { ... }
  // ...
}
   
const timeout = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  }
})
  
const scheduler = new Scheduler()
  
const addTask = (time,order) => {
  scheduler.add(() => timeout(time).then(()=>console.log(order)))
}
addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
// output: 2 3 1 4
整个的完整执行流程：
起始1、2两个任务开始执行
500ms时，2任务执行完毕，输出2，任务3开始执行
800ms时，3任务执行完毕，输出3，任务4开始执行
1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
1200ms时，4任务执行完毕，输出4
*/

class Scheduler {
  constructor(concurrency) {
    // 当前异步任务队列
    this.queue = [];
    this.concurrency = concurrency;
    // 正在运行的异步数量
    this.count = 0;
  }
  add(promiseCreator) {
    this.queue.push(promiseCreator);
    this.runQueue();
  }
  runQueue() {
    // 有异步任务并且 运行的数量小于限制的并发才会执行
    if (this.queue.length && this.count < this.concurrency) {
      this.count++;
      const promiseCreator = this.queue.shift();
      promiseCreator().then(() => {
        // 执行完毕后
        this.count--;

        this.runQueue();
      });
    }
  }
}

const timeout = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const scheduler = new Scheduler(2);

const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
