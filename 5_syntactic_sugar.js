const arr = [1, 2, 3, 4, 5];

const doubled1 = arr.map(double);

function double(element) {
  return element * 2;
}

const doubled2 = arr.map(function (element) {
  return element * 2;
});

const doubled3 = arr.map((element) => {
  return element * 2;
});

const doubled4 = arr.map((element) => element * 2);

console.log(arr);
console.log(doubled1);
console.log(doubled2);
console.log(doubled3);
console.log(doubled4);

const [first, second, ...rest] = arr;
console.log(first, second, rest);

const person = {
  name: "Nico",
  website: "Frontend Expert",
};

const { name } = person;
console.log(name);

const { website: sitio_web } = person;
console.log(sitio_web);

// Option 1
function printName1(person) {
  return person.name;
}
printName1(person);

// Option 2
function printName2({ name }) {
  return name;
}
printName2(person);

const arr_1 = [1, 2, 3, 4];
const arr_2 = [5, 6, 7];
const arr_3 = [...arr_1, ...arr_2];

function sum(x, y) {
  return x + y;
}

sum(...arr_1);

function decompose(...elements) {
  return elements;
}
console.log(decompose([1, 2, 3, 4, 5]));

// Template Literals
const name_literal = "Nico";
console.log("Hello " + name_literal);
console.log(`Hello ${name_literal}`);

// Nullish Coalescing
const defaultName_1 = name_literal != null ? name : "DefaultName";
const defaultName_2 = name ?? "DefaultName";

// Optional Chaining
const person_2 = {
  company: {
    website: "AlgoExpert.io",
  },
};
const person_3 = {
  company: {
    // website: 'AlgoExpert.io'
  },
};
const person_4 = {
  // company: {
  //     website: 'AlgoExpert.io'
  // }
};

console.log(person_2.company.website);
console.log(person_3.company.website);
console.log(person_4?.company?.website ?? "foo"); // If I don't add the '?' it results in error because it's the same as 'undefined.website'

// Short Circuit Evaluation
const shouldRunCode = true;

function logWorld() {
  console.log("Hello World");
}

// From this...
if (shouldRunCode) {
  logWorld();
}

// To this...
shouldRunCode && logWorld();


// from a quiz exercise. Remember, the "...args" is unpacking the list
function debounce(callback) {
  return function (...args) {
      callback(...args);
  }
}

function test(...args) {
  console.log(...args);
}

const tests = debounce(test);
tests(1, 2, 3);