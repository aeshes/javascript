var animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name
};

Rabbit.prototype = animal;

var rabbit = new Rabbit("Кролик");

console.log(rabbit.eats);