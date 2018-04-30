function repeat(str, times) {
    return times-- > 0 ? str + repeat(str, times) : "";
}

function drawPyramid(maxRows) {

}

console.log(repeat("#", 5));
console.log(repeat("#", 0));
console.log(repeat("#", 1));
console.log(repeat("#", -1));