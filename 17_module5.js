// import * as helpers from './17_module4.js'  - Not the best way to import, with *
import { algoExpert2 as algo, frontendExpert2 as fee } from "./17_module4.js";
import { Person2 } from "./17_module3.js";

fee();
algo();

const nicolas = new Person2("Nicolas");
nicolas.sayHello();

const shouldSay = true;

if (shouldSay) {
  const { frontendExpert2 } = await import("./17_module4.js");
  // I use this instead because importing the module may take a while
  frontendExpert2();
}
