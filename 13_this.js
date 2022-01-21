/*
'this' is a JS keyword for referencing the context in which the current code is running.

The value of 'this' is determined at runtime. In the browser, it will follow these general rules:
1. At the top level of a file (the global context), 'this' refers to the global object, which is
the 'window'
2. In a standard function without strict mode, 'this' refers to the global object, which is the 
'window'
3. In a standard function in strict mode, 'this' is 'undefined'
4. In an object method, 'this' refers to that object.
5. In a constructor function, 'this' refers to the object being constructed
6. When using events listeners, the object being listened to will be bound to 'this', assuming a
standard function was used. For example, 'element.addEventlistener('click', func)' would bind 
'element' to 'this' inside of 'func'.

Arrow functions do not create their own 'this' context, instead they retain the value of the 
enclosing context.

JS provides three functions for binding the value of this to functions:
- func.bind(thisArg): Returns a new function with 'thisArg' bound to 'this'
- func.call(thisArg, x, y): Calls 'func(x, y)' with 'thisArg' bound to 'this'
- func.apply(thisArg, [x, y]): Calls 'func(x, y)' with 'thisArg' bound to 'this'
*/

console.log(this); // Is the Window, which is at the highest level

function logThis() {
    console.log(this);
}

logThis(); // Will be undefined when running 'use strict' mode

const obj = {
    num: 10,
    logThis
}

obj.logThis();

const button = document.getElementById('boton_1');
button.addEventListener('click', logThis);

const logThis2 = () => {
    console.log(this);
}

const button_2 = document.getElementById('boton_2');
button_2.addEventListener('click', logThis2);
/*
* In button_2 the arrow function has the 'this' referred to the env/context where this function
* was declared. However, I can use binding mechanisms to use the 'this' word the way I would expect it
*/

const obj_2 = {
    num: 10
}

function logThis3(x, y){
    console.log(this);
    console.log(x, y);
}

const boundLogThis = logThis3.bind(obj, 10, 20);
boundLogThis();

logThis3.call(obj, 10, 30);
logThis3.apply(obj, [10, 40]);


// For regular functions the 'this' element can be added in an iteration, whereas the same
// will not work for arrow functions because of the explanation above.
[1, 2, 3].forEach(function (element) {
    console.log(element);
    console.log(this);
}, { num: 10 })

