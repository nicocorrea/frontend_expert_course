/*
PROTOTYPAL INHERITANCE
* In this type objects only inherit from other objects, rather than classical inheritance where it is using
* class blueprints.
*/

const person = {
    isHuman: true
};

console.log(person);

const child = Object.create(person);

console.log(child); // {}
console.log(child.isHuman); // true

// This is another way of declaring it, but is not best practice, though widely used.
const child2 = {}
child2.__proto__ = person;
child2.maxAge = 20;

console.log(child2); // {}
console.log(child2.isHuman); // true
console.log(child2.maxAge) // 20


// Another way, a bit better...
const child3 = Object.assign(Object.create(person), {
    maxAge: 20
});

console.log(child3.isHuman); // true
console.log(child3.maxAge); // 20

person.isHuman = false;
console.log(child3.isHuman) // false

// Another way, not recommended
const child4 = {
    maxAge: 20
};
Object.setPrototypeOf(child4, person);
console.log(child4.isHuman); // false

// And last one, not recommended either
const child5 = Object.create(person, {
    maxAge: {
        value: 20,
        writable: true,
        configurable: true,
        enumerable: true
    }
})


// Child of a child
const nico = Object.create(child3);
nico.name = 'nicolas';

console.log(nico); // { name: 'nicolas' }
console.log(nico.__proto__); // { maxAge: 20 }
console.log(nico.__proto__.__proto__); // { isHuman: false }
console.log(Object.getPrototypeOf(nico)); // { maxAge: 20 }


// To get a list of the proto functions
const functProto = Object.getPrototypeOf(() => {});
console.log(Object.getOwnPropertyNames(functProto));

const arrayProto = Object.getPrototypeOf([]);
console.log(Object.getOwnPropertyNames(arrayProto));


/* FUNCTION CONSTRUCTORS */

function Person(name) {
    this.name = name;
}

// Every function has this property that is an object, that works as a blueprint on how the 'new' is going to work
Person.prototype = {
    constructor: Person, // will be the function itself
    isHuman: true
}

const conner = new Person("conner");
console.log(conner); // Person { name: 'conner' }
console.log(conner.isHuman); // true
console.log(conner.__proto__); // { constructor: [Function: Person], isHuman: true }
console.log(Object.getPrototypeOf(conner)); // { constructor: [Function: Person], isHuman: true }

const nicolas = new Person('nicolas');
console.log(Object.getPrototypeOf(conner) === Object.getPrototypeOf(nicolas)); // 'true' because they share the same prototype object

Person.prototype.test = true; // This will add the property and value, and be applicable to both living objects for conner and nicolas
console.log(nicolas.test);

nicolas.__proto__.share = true;
console.log(conner.share); // true


Person.prototype.speak = function () {
    console.log("Hello this is " + this.name);
}
console.log(nicolas.speak()); // Hello this is nicolas


console.log(conner instanceof Person); // true
console.log(conner instanceof Object); // true, because Object is the parents of all
console.log(Person instanceof Function); // true

/* POLYFILLS */
/* Used when a browser may not have an implementation, so we implement it. There are tons of polyfills out there */

if (Array.prototype.push === undefined){
    Array.prototype.push = function (value) {
        this[this.length] = value;
    }
}

const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]



/* CLASSES */

class Person_class {
    isHuman = true;
    static eats = true; // This makes it a property of the Person_class class, not to the instance. Same if a define a static function

    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`Hello this is ${this.name}`);
    }
}

const conner2 = new Person_class('Conner');
conner.speak();

const nicolas2 = new Person_class('Nicolas');
conner2.isHuman = false;

console.log(nicolas2.isHuman); // true
console.log(conner2.isHuman); // false
// Different, because they are different instances

console.log(conner2.eats); // undefined
console.log(nicolas2.eats); // undefined
console.log(Person_class.eats); // true


class Child extends Person_class {
    #eats;
    constructor(name, age){
        super(name);
        this.age = age;
        this.#eats = false;
    }

    eats () {
        return this.#eats;
    }
}

const child_2 = new Child('Jorge');
child_2.speak(); // 'Hello this is Jorge'

console.log(child_2 instanceof Person_class); // true
console.log(child_2.eats()); // false

