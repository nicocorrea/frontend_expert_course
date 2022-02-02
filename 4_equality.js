console.log(5 == "5");
console.log(5 === "5");
console.log(NaN == NaN);
console.log(null == undefined);
console.log(null === undefined);
// Using null with loose equality will consider 'undefined' too

const ob = {};
console.log(ob == {});
console.log(ob == ob);

const arr = [];
console.log(arr == []);
console.log(arr == arr);

const ob1 = {};
const ob2 = {};

console.log(ob1 == ob2);
