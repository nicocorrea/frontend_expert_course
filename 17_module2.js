frontendExpert();

const nicolas = new Person("Nicolas");
nicolas.sayHello();

/* I could also do the following, wrap it in a function, but this could 
   also end up with name collision on functions, but not now on variables
   because the variable is defined within the scope of the function.  */

function wrapped() {
  frontendExpert();

  const natalia = new Person("Natalia");
  natalia.sayHello();
}

wrapped();
