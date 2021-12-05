// const arr = [1, 2, 3]; 
const arr = new Array(5).fill(0); // [0, 0, 0, 0, 0]

console.log(arr.includes(3)); // false
console.log(arr.indexOf(0)); // 0
console.log(arr.lastIndexOf(0)); // 4

arr.push(4);
console.log(arr); // [0, 0, 0, 0, 0, 4]

console.log(arr.pop(4)); // 4
console.log(arr); // [0, 0, 0, 0, 0]

arr.unshift(1, 2, 3);
console.log(arr) // [1, 2, 3, 0, 0, 0, 0, 0]

arr.shift();
console.log(arr); // [2, 3, 0, 0, 0, 0, 0]

console.log(typeof (arr)); // object
console.log(Array.isArray(arr)); // true
console.log(arr instanceof Array); // true

arr.splice(0, 2); // Remember that the '2' here is the delete count
console.log(arr); // [0, 0, 0, 0, 0]
arr.splice(0, 1, 'hello');
console.log(arr); // ['hello', 0, 0, 0, 0]

const arr2 = arr.slice(0, 1);
console.log(arr2); // ['hello']

const arr3 = arr.concat(['hello', 'world']);
console.log(arr3); // ['hello', 0, 0, 0, 0, 'hello', 'world']

arr.reverse(); // is in-place
console.log(arr); // [0, 0, 0, 0, 'hello']

arr.join(' | '); // is not in-place
console.log(arr); // [0, 0, 0, 0, 'hello']
console.log(arr.join(' | ')); // 0 | 0 | 0 | 0 | hello

for (const value of arr) {
    console.log(value);
}

// forEach function will execute or do something as it iterates through the values
arr.forEach(function(value, index, array) {
    console.log(value, index, array, this.num);
}, {num : 10});

/*
0 0 [ 0, 0, 0, 0, 'hello' ] 10
0 1 [ 0, 0, 0, 0, 'hello' ] 10
0 2 [ 0, 0, 0, 0, 'hello' ] 10
0 3 [ 0, 0, 0, 0, 'hello' ] 10
hello 4 [ 0, 0, 0, 0, 'hello' ] 10
*/

// map function will execute the function and return something
const mappedArray = arr.map(function(value, index, array) {
            return (value + index + this.num);
            }, {num : 10});

console.log(mappedArray); // [ 10, 11, 12, 13, 'hello410' ]


// filter function will return whatever values fulfill the condition
const filteredArray = mappedArray.filter(function(value) {
    return value > this.num;
    }, {num : 10});

console.log(filteredArray); // [11, 12, 13]


// find function will return the value that fulfills the condition
const foundValue = filteredArray.find(function(value) {
    return value > this.num;
    }, {num : 10});

console.log(foundValue); // 11


// findIndex function will return the index that fulfills the condition
const foundIndex = filteredArray.findIndex(function(value) {
    return value > this.num;
    }, {num : 10});

console.log(foundIndex); // 0


// every function will return a boolean according to whether the condition is fulfilled for all elements
const allPass = filteredArray.every(function(value) {
    return value > this.num;
}, {num : 11});

console.log(allPass); // false


// some function will return a boolean according to whether the condition is fulfilled for all elements
const somePass = filteredArray.some(function(value) {
    return value > this.num;
}, {num : 11});

console.log(somePass); // true


console.log(filteredArray); // [11, 12, 13]

const sum = filteredArray.reduce(function(previousValue, currentValue) {
    console.log(previousValue, currentValue);
    return previousValue + currentValue;
}, 0);

console.log(sum); // 36

// The 'reduceRight' function will start from the last element


const unsortedArr = [5, 7, 3, 0];

const sortedArr = unsortedArr.sort();
console.log(sortedArr); // [ 0, 3, 5, 7 ]


function compareNumbers(firstNumber, secondNumber){
    if (firstNumber === 5){
        return -1; // This makes the firstNumber go first
    }
    if (secondNumber === 5){
        return 1; // This makes the secondNumber go first
    }
    return secondNumber - firstNumber;
}

unsortedArr.sort(compareNumbers);
console.log(unsortedArr); // [ 5, 7, 3, 0]

