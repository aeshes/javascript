function drawPyramid(maxRows) {
    for (let row = 0; row < maxRows; ++row) {
        console.log(Array(row + 1).join("*"));
    }
}

drawPyramid(10);