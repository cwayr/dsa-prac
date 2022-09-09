// binary search, v1

function binarySearch(arr, el) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (el < arr[mid]) {
      end = mid - 1;
    } else if (el > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// binary search, v2

function binarySearch(arr, el) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== el && start <= end) {
    el < arr[mid] ? (end = mid - 1) : (start = mid + 1);
    mid = Math.floor((start + end) / 2);
  }

  return arr[mid] === el ? mid : -1;
}
