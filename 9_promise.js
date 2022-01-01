/*
A Promise is an object used for asynchronous operations. These objects can have a state
of either 'pending', 'fulfilled', or 'rejected'.

It is created with the Promise constructor which takes in a callback function, called Executor.
It contains two callback function parameters:
- resolve(value): fulfills the Promise and sets its value
- reject(error): rejects the Promise and sets an error message
*/

const shouldFail = false;

const promise = new Promise((resolve, reject) => {
    if (!shouldFail) {
        setTimeout(() => resolve(2), 500);
    } else {
        setTimeout(() => reject(new Error('cagamoo')), 500);
    }
});

console.log(promise); // Promise { <pending> }
setTimeout(() => console.log(promise), 700); // Promise { 2 }
// This shows that the first one outputted exactly what its state was by the time it was called,

promise.then((value) => console.log(value), (error) => console.log('Oh No ' + error));
// I could also just put 'console.log' in the first part here.

promise.then(console.log).catch(error => console.log('Oh No ' + error));

// I can also create a Promise with a resolve state
const promise_defined = Promise.resolve(3);
console.log(promise_defined); // Promise { 3 }

promise_defined
    .then(value => value * 2)
    .then(value => value + 1)
    .then(console.log); // 7
// Remember that each .then or .catch returns a new Promise object

setTimeout(() => console.log(promise_defined.then(value => value *2)), 2000); // Promise { <pending> }

promise_defined
    .then(value => value * 2)
    .then(value => value + 1)
    .then(value => {
        throw new Error('manual error');
        return 10;
    })
    .then(console.log)
    .catch(error => {
        console.log('oh no' + error);
        return 10;
    })
    .then(console.log)
    .finally(() => console.log('done'));


// The Promise.all waits for all promises to finish
setTimeout(() => {
    Promise.all([
        Promise.resolve(3),
        Promise.resolve(2),
        new Promise((res, rej) => setTimeout(() => {
            res(5)
        }, 1000))
    ]).then(console.log); // [3, 2, 5] - and it will wait for 7 seconds till the third promise finishes
}, 8000);


setTimeout( () => {
    Promise.race([
        new Promise((res, rej) => setTimeout(() => {
            rej(10)
        }, 1000)),
        Promise.resolve(11)
    ]).then(console.log)
}, 10000); // 11 - because Promise.race will output the first promise in finishing

setTimeout( () => {
    Promise.any([
        new Promise((res, rej) => setTimeout(() => {
            res(15)
        }, 1000)),
        Promise.reject(16)
    ]).then(console.log).catch((error) => console.log(error));
}, 11000) // 15 - because Promise.any will output the value if any succeeded. All must reject to use the .catch Promise.

/*=================================================================================*/

// The 'await' keyword makes it return a Promise
async function tester_1(){
    return 1000;
};

console.log(tester_1()); // Promise { 1000 }


async function tester_2() {
    const value = await new Promise((res, rej) => setTimeout(() => res(3), 15000));
    console.log(value);
};
tester_2();


async function tester_3() {
    try{
        const value = await new Promise((res, rej) => setTimeout(() => {
            rej(new Error('Async error'));
        }, 20000));
        console.log(value);
    } catch (error) {
        console.log('Oh no: ' + error);
    }
}
tester_3();


// and this is better way to refactor tester_3()
async function tester_4() {
    return await new Promise((res, rej) => setTimeout(() => {
        rej(new Error('Async error'));
    }, 22000));
}

tester_4().then(console.log).catch((error) => console.log('oh no: ' + error));
