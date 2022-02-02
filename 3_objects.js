const key = "age";
const website = {
  name: "Nicolas",
  author: "Correa",
  [key]: 39,
  sayHello: () => {
    console.log("hello");
  },
  sayHello2() {
    console.log("hello2");
  },
  get getAuthor() {
    return this.author;
  },
  set setAuthor(name) {
    this.author = name;
  },
};

delete website.author;
console.log(website);

const obj = {};
const obj2 = new Object();

console.log({} == {});
console.log(obj == {});
console.log(obj == obj);
console.log(obj === obj);
console.log(obj == obj2);

// Function contructor
function Website(name, author, url) {
  this.name = name;
  this.author = author;
  this.url = url;
}

const website_test = new Website(
  "Nico",
  "Nico Correa",
  "http://www.google.com"
);
typeof website_test;

// Has in mind inheritance
"name" in website_test;
// Doesn't have in mind inheritance
website_test.hasOwnProperty("name");

const id1 = Symbol("id");
const id2 = Symbol("id");
id1 == id2;

typeof id1;

// The Symbol.for makes the identifier the same, that's why it's equal here.
const id3 = Symbol.for("id2");
const id4 = Symbol.for("id2");
id3 === id4;

// Inheritance
const kindle = {
  name: "Nicolas",
  age: 35,
};

const kindle_child = {
  foo: "bar", // Own property
  [Symbol("id")]: 0, // Symbol
  __proto__: kindle, // Inherited - __proto__ is used to inherit properties
};

kindle_child.name;

// This way we see only the own properties
console.log(Object.keys(kindle_child));
console.log(Object.entries(kindle_child));

// This way we see inherited properties
for (const key in kindle_child) {
  console.log(key);
}

const myObj = {
  original: true,
};

const objSeal = {
  name: "Nicolas",
};

// Copy objects without scoping inherited properties
Object.assign(myObj, kindle_child);

// Freeze object to avoid further changes
Object.freeze(myObj);

// Seal object to avoid adding/removing properties but still able to change current properties
Object.seal(objSeal);
objSeal.name = "pEPE";
objSeal.edad = 35;
objSeal;

console.log(objSeal.valueOf());

const objVal = {
  name: "Nicolas",
  age: 35,
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 5;
    } else if (hint === "string") {
      return "hello";
    }
    return 2;
  },
};
objVal.toString = function () {
  return "object to string";
};
console.log(objVal.toString());
// objVal.valueOf = () => {
//     return 4;
// }
console.log(objVal.valueOf());

console.log(String(objVal));
console.log(Number(objVal));

console.log(10 - objVal);
// It gives 12 because it can be addition or concatenation, and since it does not know, then it used the default number.
console.log(10 + objVal);

console.log(Object.keys(objVal));
console.log(Reflect.ownKeys(objVal));
