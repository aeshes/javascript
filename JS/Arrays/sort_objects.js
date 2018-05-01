var vasya = { name: "Vasya", age: 23 };
var masha = { name: "Masha", age: 18 };
var vovo = { name: "Vovochka", age: 6 };

var people = [vasya, masha, vovo];
people.sort((a, b) => {
    return a.age < b.age ? -1 : 1;
});

people.forEach((p) => {
    console.log(p.name);
});