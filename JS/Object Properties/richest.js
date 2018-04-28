(function() {
    'use strict';

    let salaries = {
        "Vasya": 100,
        "Petya": 300,
        "Dasha": 250
    };

    const findRichest = (obj) => {
        const sortedEmployeesBySalary = Object.keys(obj)
            .sort((a, b) => {
                return obj[a] < obj[b] ? 1 : -1;
            });
        return sortedEmployeesBySalary[0] || "No employees";
    };

    console.log(findRichest(salaries));
}());