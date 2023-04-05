let str =
  "http://www.baidu.com?projectId=13110&type=xxx&name=%E5%8C%97%E4%BA%AC&type=abc";
function decodeUrl(url) {
  // 如果有中文字符编码的话 可以解码成功
  const decodedURl = decodeURI(url);
  const start = decodedURl.indexOf("?");
  const str = decodedURl.slice(start + 1);
  const strArr = str.split("&");
  const res = {};
  strArr.forEach((item) => {
    const position = item.indexOf("=");
    const key = item.slice(0, position);
    let val = item.slice(position + 1);
    val = judgeVal(val);
    if (res[key]) {
      if (Array.isArray(res[key])) res[key].push(val);
      else {
        const previous = res[key];
        res[key] = [previous, val];
      }
    } else {
      res[key] = val;
    }
  });
  console.log(res);
  return res;
}

function judgeVal(val) {
  // 判断"1" 转化为 1
  if (!isNaN(parseInt(val))) return parseInt(val);
  return val;
}

decodeUrl(str);
