/*
* JAVASCRIPT ENGINE
A program used to execute the JavaScript code.

These engines can differ a lot in implementation across browsers, but for the most 
part they contain two primary components. (i.e. chrome has V8 engine)

- Heap: Used for memory allocation to store objects.
- Call Stack: A stack data structure used to keep track of the currently executing function.
Each function call pushes a stack frame onto the stack, which contains information about
the function and its local variables. When a function ends, it is popped off the stack.
When the stack is empty, there is no code currently running.

* JAVASCRIPT RUNTIME ENVIRONMENT
The alrger environment that JavaScript is executed in. In the browser, this environment
provides access to a variety of web APIs. These APIs include the functions for:
 - Timers
 - HTTP requests
 - DOM manipulation
 - ... much more

* EVENT LOOP
The concurrency model within JavaScript. This is a constantly running loop within
the browser, roughly following this algorith:
 1. Remove one task from the task queue
 2. Execute code until the call stack is empty
 3. Execute microtasks one at a time until the microtask queue is empty
 4. Render any changes to the DOM
 5. Go to step one

* TASK QUEUE
A queue data structure for storing asynchronous callbacks to be added to the call stack.
This queue is also known as the "Message Queue", "Callback Queue" or "Macrotask Queue"

Web APIs move callbacks into the task queue, where they wait for the call stack to be 
empty before executing.

* MICROTASK QUEUE
A queue data structure, similar to the task queue, used for storing microtasks.

Microtasks are primarily used for callback functions passed to promise.then(), promise.catch(),
and promise.finally() as well as their async/await equivalents. Additionally, microtasks can be
manually queued using the queueMicrotask() function.

Microtasks can be considered to have a higher priority than standard tasks, since the entire
microtask queue must be empty before the browser will move on to a task.

* CHUNKING
A process for preventing slow functions from clogging the call stack and thus making the entire
page unresponsive. The core idea of chunking is to take large tasks and split them up into
smaller ones. In practice, chunking is usually achieved by using setTimeout after some number of
operations, forcing future chunks to move to the end of the task queue.

! AVOID SLOW TASKS
- They block the page from updating
- Keep big computations on the server side rather than on the front-end side (browser)
...or use chunking or web workers


! Why the Event Loop matters
- Because timers are not exact, hence you'll need to use date objects or the performance.now()
- Promise callbacks can be delayed
- Slow tasks can be completely blocking, hence you could use 'chunking'
*/

function logOne() {
    console.log("1");
}

function main() {
    setTimeout(logOne, 0);
    Promise.resolve(2)
        .then(val => val * 2)
        .then(console.log);
    console.log('3');
}

main();

const a = performance.now();
const b = performance.now();

console.log(b-a);