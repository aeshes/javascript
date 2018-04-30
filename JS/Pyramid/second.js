"use strict";

function repeat(str, times) {
    return times-- > 0 ? str + repeat(str, times) : "";
}

function drawPyramid(maxRows) {
    for (let row = 1; row <= maxRows; ++row) {
        let pattern = row < maxRows/2 ? repeat("*", row) : repeat("*", maxRows - row);
        console.log(pattern);
    }
}

console.log(repeat("#", 5));
console.log(repeat("#", 0));
console.log(repeat("#", 1));
console.log(repeat("#", -1));

drawPyramid(6);