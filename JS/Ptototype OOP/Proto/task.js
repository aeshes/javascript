var head = {
    glasses: 1
};

var table = {
    pen: 3
};

var bed = {
    sheet: 1,
    pillow: 2
};

var pockets = {
    money: 2000
};

pockets.__proto__ = table;
bed.__proto__ = head;

console.log(pockets.pen == 3);
console.log(bed.glasses == 1);
console.log(table.money == undefined);