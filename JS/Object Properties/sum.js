(function() {
    'use strict';

    let salaries = {
        "Vasya": 100,
        "Petya": 300,
        "Dasha": 250
    };

    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    console.log(sum);
}());