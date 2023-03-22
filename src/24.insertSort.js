//  插入排序
function insertSort(arr) {
  if (arr.length <= 1) return arr;
  //   从第一个元素开始排
  for (let i = 1; i < arr.length; i++) {
    // 当前的值
    const curVal = arr[i];
    // 当前的值和前面的值进行比较 前面已经排好序了，一直比较到curVal > 前面的值就说明找到位置了
    let j = i - 1;
    while (j >= 0 && curVal < arr[j]) {
      // 再向前插入的时候 后面的向后移位
      arr[j + 1] = arr[j];
      j--;
    }
    //  出循环的时候 表明真正的位置已经找到了  举个例子看看就知道了 2379 4 j为3的时候满足目的
    arr[j + 1] = curVal;
  }
  return arr;
}

const arr = [11, 2, 7, 5, 9];

console.log(insertSort(arr));
