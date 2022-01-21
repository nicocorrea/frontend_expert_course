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

console.log(persona.func1(5));
console.log(persona.func2(5));