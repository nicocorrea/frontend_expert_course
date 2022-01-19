export class Person2 {
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log(`Hi, this is ${this.name}`);
    }
}


/*

I could also take 'export' out, and do later in code this:

export { Person }

...or...

export { Person as default } and then import it like this in the other file:

import Person from './17_module3.js' - the point here is that I don't need to add
the curly braces.

*/