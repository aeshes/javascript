(function() {
    'use strict';

    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    function multiplyNumeric(obj) {
        for (let key in obj) {
            if (isNumeric(obj[key])) {
                obj[key] *=2;
            }
        }
    }

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    multiplyNumeric(menu);
    for (let key in menu) {
        console.log(key + ": " + menu[key]);
    }
}());