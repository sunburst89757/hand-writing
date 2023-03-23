class Router {
  constructor(routes) {
    this.routes = routes;
    this.beforeHooks = [];
    this.afterHooks = [];
  }
  beforeEach(cb) {
    this.beforeHooks.push(cb);
  }
  afterEach(cb) {
    this.afterHooks.push(cb);
  }
  async runbeforeHooks(from, to, next) {
    for (const hook of this.beforeHooks) {
      try {
        await hook(from, to, next);
      } catch (error) {
        console.log(error);
      }
    }
  }
  async runafterHooks(from, to) {
    for(const hook of this.afterHooks){
        await hook(from,to);
    }
  }
  push(url) {
    const from = window.location.href;
    const to = url;
    const next = (url) => {
      window.history.pushState(url);
      this.runafterHooks(from, to);
    };
    this.runbeforeHooks(from, to, next);
  }
}
