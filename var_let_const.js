/*
let   : A keyword for declaring a block-scoped variable that cannot be accessed before initialisation.
var   : A keyword for declaring a function-scoped variable that is automatically initialized to undefined when it is hoisted.
const : A keyword for declaring a constant value, and have the same behavior as 'let', except they cannot be reassigned.

Hoisting is the process by which the JS engine moves variable declarations to the top of their scope, allocating
memory for them before reaching the line of code where they are declared. For variables declared with 'var' they are 
initialized to 'undefined' until reaching the line of code that initialized the variable. For variables declared with 
'let' or 'const', those are not initialized and thus cannot be accessed before the list of code that initializes it.

*/

console.log(var1); // 'undefined'
console.log(let1); // Cannot access 'let1' before initialization

var var1 = 0;
let let1 = 0;


function test1(){
    var var2 = 0;
    let let2 = 0;

    console.log('var2', var2); // 0
    console.log('let2', let2); // 0
}

test1();


function test2() {
    if (true){
        var var3 = 0;
        let let3 = 0;
    }
    console.log('var3', var3); // 0
    console.log('let3', let3); // let3 is not defined
}

test2();

// const behaves exactly the same as 'let' except that it cannot be reassigned.