
// var age = 100;

// const persona = {
//     name: 'Nicolas',
//     age: 35,
//     func1: function(num) {
//         return num + this.age;
//     },
//     func2: (num) => {
//         return persona.age;
//     }
// }

// console.log(persona.func1(5));
// console.log(persona.func2(5));


function debounce(callback, delay, immediate = false) {
    let timerID;

    if (!immediate) {
        return function(){
            clearTimeout(timerID);
            timerID = setTimeout(callback, delay);
        }
    } else {
        return function() {
            setTimeout(callback, 0);
            clearTimeout(timerID);
            timerID = setTimeout(callback, delay);
        }
    }
  }

function test() {
    console.log("1");
}

const tests = debounce(test, 4000, true);
setTimeout(tests, 0);
setTimeout(tests, 1000);
setTimeout(tests, 2000);
