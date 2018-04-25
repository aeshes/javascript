(function() {
    'use strict';

    function filter(arr, func) {
        var result = [];
        for (var i = 0; i < arr.length; ++i)
            if (func(arr[i]))
                result.push(arr[i]);
        return result;
    };

    function inBetween(a, b) {
        return function(arg) {
            return arg >= a && arg <= b
        };
    };

    function inArray(arr) {
        return function(arg) {
            return arr.indexOf(arg) != -1;
        };
    };

    var arr = [1, 2, 3, 4, 5, 6, 7];
    console.log(filter(arr, function(arg) {
        return arg % 2 == 0;
    }));

    console.log(filter(arr, inBetween(2, 5)));

    console.log(filter(arr, inArray([5, 6, 7])));

})();