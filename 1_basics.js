const person = {
  name: "Conner",
  course: "FrontendExpert",
};

console.log(JSON.stringify(person)); // Returns a string - {"name":"Conner","course":"FrontendExpert"}

const map = new Map();
map.set(123, "hello");
map.set(123, "world");
console.log(map.get(123)); // 'world'
console.log(map.get(0)); // 'undefined'
console.log(map.size); // '1'

const set = new Set();
set.add("hello");
set.add("bye");
console.log(set.size); // '2'
set.delete("hello");
console.log(set.has("hello")); // 'false'
console.log(set);

const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
console.log(typeof arr); // 'object'

function addTwo(num = 6) {
  return num + 2;
}

function callFunc(func, param) {
  console.log(func(param));
}

callFunc(addTwo, 3); // 5
callFunc(addTwo); // 8

for (let i = 0; i <= 4; i++) {
  if (i == 1) {
    continue;
  }
  console.log(i);
}

let i = 0;

while (i < 4) {
  console.log(i);
  i++;
}

// This is another way of writing it, but the code gets executed and THEN validate the condition
do {
  console.log(i);
  i++;
} while (i < 4);

// For Of
for (const value of [5, 6, 7]) {
  console.log(value); // 5, 6, 7
}

// For In
for (const value in [5, 6, 7]) {
  console.log(value); // 0, 1, 2
}

// For In (in an object)
for (const key in person) {
  if (person.hasOwnProperty.call(person, key)) {
    const element = person[key];
    console.log(key, element);
  }
}

[1, 2, 3].forEach(function (value) {
  console.log(value + 1); // 2, 3, 4
});

const myNum = 2;
switch (myNum) {
  case 1:
    console.log("1");
    break; // Important to set the breaks
  case 2:
    console.log("2");
    break;
  default:
    console.log("Default");
}

console.log(myNum > 5 ? "Greater than 5" : "Less than 5");

console.log("value");
console.error("error message"); // And this will be displayed in red color in the browser logs
console.debug("debug message"); // And this will display in the debug option of the browser
console.table([
  [1, 2],
  ["nico", "correa"],
]);

console.count("upload"); // 1
console.count("download"); // 1
console.count("upload"); // 2

console.time();
for (let i = 0; i < 1000000000; i++) {}
console.timeLog();

console.trace(); // Will output where we are
