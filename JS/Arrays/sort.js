(function() {
    "use strict";

    let arr = [2, 15, 7];
    arr.sort((a, b) => {
        console.log(a + " <> " + b);
        return a < b ? -1 : 1;
    });

    console.log(arr);
}());