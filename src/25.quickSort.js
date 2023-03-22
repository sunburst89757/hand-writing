//  快速排序

function quickSort(arr) {
  function sort(arr, left, right) {
    if (left >= right) return;
    const pivot = getPortion(arr, left, right);
    //  左右两边排好序
    sort(arr, left, pivot - 1);
    sort(arr, pivot + 1, right);
  }
  function getPortion(arr, left, right) {
    // 基准
    const pivot = arr[left];
    let l = left + 1;
    let r = right;
    while (l <= r) {
      while (arr[l] < pivot) {
        l++;
      }
      while (arr[r] > pivot) {
        r--;
      }
      // 提前考虑如果已经到了退出循环的时候
      if (l >= r) break;
      // 出循环的时候 说明l 所在的位置 arr[l] > pivot r 所在的位置 arr[r] < pivot; 交换顺序
      swap(arr, l, r);
    }
    //  出循环表明 真正的pivot 所在的位置就是r 所以也需要交换位置
    swap(arr, left, r);
    return r;
  }
  function swap(arr, left, right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }
  sort(arr, 0, arr.length - 1);
}
const arr = [9, 2, 7, 5, 3];
quickSort(arr);
console.log(arr);
