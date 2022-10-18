// return specific digit in a number (from end) (1564, 2 => 5) (29, 0 => 9)
const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

// return number of digits in a number (459 => 3)
const getDigitCount = (num) => +Math.abs(num).toString().length;

// return max number of digits in a list of numbers ([1, 351, 44] => 3)
const getMostDigits = (nums) => {
  let maxDigits = 0;
  nums.forEach((num) => (maxDigits = Math.max(maxDigits, getDigitCount(num))));

  return maxDigits;
};

const radixSort = (nums) => {
  let maxDigitCount = getMostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []); // array of 10 empty arrays
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }

  return nums;
};

console.log(radixSort([54, 82, 2, 958, 3458, 44, 567, 4]));
