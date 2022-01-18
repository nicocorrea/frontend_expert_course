function* genNumbers() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
    yield 5;
}

const gen = genNumbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
// You can observe that the 'yield 5' never executes


function* genNumbers2(count) {
    for (let i=0; i<count; i++){
        yield i;
    }
    return 5;
}

const gen2 = genNumbers2(3);

console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());


const gen3 = genNumbers2(3);
for (value of gen3){
    console.log(value);
}
/* In this case, the 'return 5' won't happen. Better to avoid for loops like this because 
you can miss that return statement */


function* genNumbers3(count) {
    const value = yield 0;
    yield value + 3;
    yield 10;
}

const gen4 = genNumbers3(3);

console.log(gen4.next());
console.log(gen4.next(1));
/* If I had a 'console.log(gen4.return(5))', the next line would not execute because 
return concluded the generator */
console.log(gen4.next(1));
/*
! ===> If I uncomment this an error is thrown and the rest will not execute 'console.log(gen4.throw(new Error('pepito!')));'
*/
// This will stop executing anything else on that generator.



// GENERATOR OF GENERATOR

function* generator1() {
    yield 1;
    yield 2;
}

function* generator2() {
    yield 3;
    yield 4;
}

function* generatorMain() {
    yield* generator1();
    yield 2.5;
    yield* generator2();
}
/*
*  What the 'yield*' is doing is that it will continue iterating over that generator 
*  before moving onto the next yield in the function.
*/

const genOfGen = generatorMain();

for (value of genOfGen){
    console.log(value);
}
