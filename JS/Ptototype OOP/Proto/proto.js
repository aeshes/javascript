var animal = {
    eats: true
};

var rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;

console.log(rabbit.jumps);
console.log(rabbit.eats);