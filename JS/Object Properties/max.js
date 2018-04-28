(function() {
    'use strict';

    let salaries = {
        "Vasya": 100,
        "Petya": 300,
        "Dasha": 250
    };

    let employee = "";
    let max_salary = 0;
    for (let key in salaries) {
        if (salaries[key] > max_salary) {
            max_salary = salaries[key];
            employee = key;
        }
    }
    console.log(employee || "no employees");
}());