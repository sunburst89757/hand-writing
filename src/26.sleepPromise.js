//  超时自动reject
const sleep = (fn, timeout = 500) => {
  return new Promise((resolve, reject) => {
    let flag = true;
    setTimeout(() => {
      if (flag) reject("超时");
    }, timeout);
    Promise.resolve(fn())
      .then((res) => {
        flag = true;
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
