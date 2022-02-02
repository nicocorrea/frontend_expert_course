/*
* This is called 'lexical scoping'. Functions have access to their parent's scope.
! 'Closure' means that there is access in a function to the outer scope within the inner function.
* When the function cannot find the variable within its scope (i.e. 'globalNum' in here) then 
* it is going to look within its parent's scope. In this case the global env.
*/
const globalNum = 5;

function logNum() {
  const localNum = 1;
  console.log(globalNum + localNum);
}

logNum();

// In the following example, it is outputting 10, because the closure (logNum func) has an
// argument named 'num'

function example() {
  const num = 5;

  function logNum(num) {
    console.log(num);
  }

  logNum(10);
}

example();

// And another example below
function example_2() {
  const num = 5;

  return function () {
    console.log(num);
  };
}

const innerFunction = example_2();

example_2(); // Returns a function
innerFunction(); // Is already a function and executes the code inside the inner function
example_2()(); // Is the same as the one above

/*
! A way of using it to having private attributes
*/

function makeFunction() {
  let privateNum = 0;

  function privateIncrement() {
    privateNum++;
  }

  return {
    logNum_2: () => console.log(privateNum),
    increment: () => {
      privateIncrement();
      console.log("Incremented!");
    },
  };
}

const { logNum_2, increment } = makeFunction();
logNum_2();
increment();
logNum_2();

console.log(logNum_2.privateNum); // I cannot access it

const { logNum_2: logNum_3, increment: increment_3 } = makeFunction();
logNum_3();
increment_3();
logNum_3();

// They output different variables because they were created in different calls to the makeFunctions call
// ! at the time that the declaration happens

// ! INTERVIEW QUESTION

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 500);
}

for (var i = 0; i < 3; i++) {
  console.log(i);
  setTimeout(() => {
    console.log(i);
  }, 500);
}

/*
! With 'let' it creates a new variable on every loop, which is sent to the closure, by the time
! of its declaration.

! With 'var' it references to the global variable, which after 500ms, it already has the value of 3.

*/
