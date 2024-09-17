export function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
}
