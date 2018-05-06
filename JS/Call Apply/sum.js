"use strict";

function sum(arr) {
    return arr.reduce(function(sum, current) {
        return sum + current;
    });
}

function sumArgs(arr) {
    return [].reduce.call(arguments, function(sum, current) {
        return sum + current;
    });
}

console.log(sum([1, 2, 3]));
console.log(sumArgs(1, 2, 3));