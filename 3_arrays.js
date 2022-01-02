// const arr = [1, 2, 3];
const arr = new Array(5).fill(0);

console.log(arr.includes(3));
console.log(arr.indexOf(0));
console.log(arr.lastIndexOf(0));

arr.push(4);
console.log(arr);

console.log(arr.pop(4));
console.log(arr);

arr.unshift(1, 2, 3);
console.log(arr);

arr.shift();
console.log(arr);

console.log(typeof arr);
console.log(Array.isArray(arr));
console.log(arr instanceof Array);

arr.splice(0, 2);
console.log(arr);
arr.splice(0, 1, "hello");
console.log(arr);

const arr2 = arr.slice(0, 1);
console.log(arr2);

const arr3 = arr.concat(["hello", "world"]);
console.log(arr3);

arr.reverse();
console.log(arr);

arr.join(" | ");
console.log(arr);
console.log(arr.join(" | "));

for (const value of arr) {
  console.log(value);
}

// forEach function will execute or do something as it iterates through the values
arr.forEach(
  function (value, index, array) {
    console.log(value, index, array, this.num);
  },
  { num: 10 }
);

/*
0 0 [ 0, 0, 0, 0, 'hello' ] 10
0 1 [ 0, 0, 0, 0, 'hello' ] 10
0 2 [ 0, 0, 0, 0, 'hello' ] 10
0 3 [ 0, 0, 0, 0, 'hello' ] 10
hello 4 [ 0, 0, 0, 0, 'hello' ] 10
*/

// map function will execute the function and return something
const mappedArray = arr.map(
  function (value, index, array) {
    return value + index + this.num;
  },
  { num: 10 }
);

console.log(mappedArray);

// filter function will return whatever values fulfill the condition
const filteredArray = mappedArray.filter(
  function (value) {
    return value > this.num;
  },
  { num: 10 }
);

console.log(filteredArray);

// find function will return the value that fulfills the condition
const foundValue = filteredArray.find(
  function (value) {
    return value > this.num;
  },
  { num: 10 }
);

console.log(foundValue);

// findIndex function will return the index that fulfills the condition
const foundIndex = filteredArray.findIndex(
  function (value) {
    return value > this.num;
  },
  { num: 10 }
);

console.log(foundIndex);

// every function will return a boolean according to whether the condition is fulfilled for all elements
const allPass = filteredArray.every(
  function (value) {
    return value > this.num;
  },
  { num: 11 }
);

console.log(allPass);

// some function will return a boolean according to whether the condition is fulfilled for all elements
const somePass = filteredArray.some(
  function (value) {
    return value > this.num;
  },
  { num: 11 }
);

console.log(somePass);

console.log(filteredArray);

const sum = filteredArray.reduce(function (previousValue, currentValue) {
  console.log(previousValue, currentValue);
  return previousValue + currentValue;
}, 0);

console.log(sum);

// The 'reduceRight' function will start from the last element

const unsortedArr = [5, 7, 3, 0];

const sortedArr = unsortedArr.sort();
console.log(sortedArr);

function compareNumbers(firstNumber, secondNumber) {
  if (firstNumber === 5) {
    return -1; // This makes the firstNumber go first
  }
  if (secondNumber === 5) {
    return 1; // This makes the secondNumber go first
  }
  return secondNumber - firstNumber;
}

unsortedArr.sort(compareNumbers);
console.log(unsortedArr);
