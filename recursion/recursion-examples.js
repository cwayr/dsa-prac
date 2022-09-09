// count down to 0

function countDown(num) {
  if (num <= 0) {
    console.log("Completed 🤙");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// return factorial of number

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// collect all odd values in array (helper method recursion)

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

// collect all odd values in array (pure recursion)

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;
  if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);

  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
}
