function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (i !== min) if (arr[j] < arr[min]) [arr[min]] = [arr[j]];
    }
  }
  return arr;
}
