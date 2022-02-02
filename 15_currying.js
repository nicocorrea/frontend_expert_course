function sum(a, b, c) {
  return a + b + c;
}

function curry(func) {
  return function (a) {
    return function (b) {
      return function (c) {
        return func(a, b, c);
      };
    };
  };
}

function curry_better(func) {
  return (a) => (b) => (c) => func(a, b, c);
}

const curriedSum = curry(sum);
const curriedSum2 = curry_better(sum);

console.log(sum(2, 2, 2));
console.log(curriedSum(2)(2)(2));
console.log(curriedSum2(2)(2)(2));

// This could be used to create partial versions of this function.
