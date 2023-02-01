/**
 * @description:  带有时间控制的缓存函数 创建的值带有过期时间 取缓存的时候判断即可
 * @return {*}
 */
class cache {
  constructor(type) {
    const obj = {
      local: localStorage,
      session: sessionStorage,
    };
    this.cache = obj[type];
  }
  setItem(key, value, delay) {
    const val = {
      value,
      expireTime: delay ? Date.now() + delay : Number.MAX_SAFE_INTEGER,
    };
    this.cache.setItem(key, JSON.stringify(val));
  }
  getItem(key) {
    const res = JSON.parse(this.cache.getItem(key));
    if (Date.now() > res.expireTime) {
      this.cache.removeItem(key);
      return null;
    }
    return res.value;
  }
}
