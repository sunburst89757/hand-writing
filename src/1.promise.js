// 要点总结： Promise类上的方法
// 1. 检查是否是数组 Arrary.isArray
// 2. 数量对了才可以resolve 必须在循环外面引入计数变量counter不能直接使用result.length === arr.length(使用foreach循环写)

// 1 基本使用
/* const p = new Promise((resolve, reject) => {
  reject(2);
  resolve(1);
});
p.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
); */
// 2 Promise类方法
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1);
  }, 200);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2);
  }, 100);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3);
  }, 500);
});
//2.1 Promise.all
/* const promiseAll = (arr) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) throw new Error("输入必须是数组");
    const results = [];
    let counter = 0;
    arr.forEach((p, index) => {
      Promise.resolve(p).then(
        (res) => {
          results[index] = res;
          counter++;
          // 注意不能使用results的长度
          if (counter === arr.length) resolve(results);
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
};
promiseAll([p1, p2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */

// 2.2 Promise.allSettled
/* const promiseAllSettled = (arr) => {
  return new Promise((resolve) => {
    if (!Array.isArray(arr)) throw new Error("输入必须是数组");
    const results = [];
    let counter = 0;
    arr.forEach((p, index) => {
      Promise.resolve(p).then(
        (res) => {
          results[index] = { status: "fulfilled", value: res };
          counter++;
          // 注意不能使用results的长度
          if (counter === arr.length) resolve(results);
        },
        (err) => {
          results[index] = { status: "rejected", reason: err };
          counter++;
          if (counter === arr.length) resolve(results);
        }
      );
    });
  });
};

promiseAllSettled([p1, p2, p3]).then((res) => {
  console.log(res);
});
 */
// 2.3 Promise.race
/* const promiseRace = (arr) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) throw new Error("输入必须是数组");
    arr.forEach((p, index) => {
      Promise.resolve(p).then(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
};

promiseRace([p1, p2, p3]).then((res) => {
  console.log(res);
}); */

// 2.4 Promise.any
const promiseAny = (arr) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) throw new Error("输入必须是数组");
    let counter = 0;
    arr.forEach((p, index) => {
      Promise.resolve(p).then(
        (res) => {
          resolve(res);
        },
        (err) => {
          counter++;
          if (counter === arr.length) reject("all promise are rejected");
        }
      );
    });
  });
};

promiseAny([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
