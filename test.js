var age = 100;

const persona = {
    name: 'Nicolas',
    age: 35,
    func1: function(num) {
        return num + this.age;
    },
    func2: (num) => {
        return persona.age;
    }
}

// console.log(persona.func1(5));
// console.log(persona.func2(5));

function curry(callback) {
    let arguments = []

    const currier = function (...args) {
        if (args.length === 0) {
            return callback();
        }
        return (...moreargs) => {
            if (moreargs.length === 0){
                return callback(...args);
            }
            return currier(...args, ...moreargs);
        }
    };

    return currier;
}
