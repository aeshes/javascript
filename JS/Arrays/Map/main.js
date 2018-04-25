(function() {
    'use strict';

    var arr = ["Есть", "Жизнь", "На", "Марсе"];
    var wordsLength = arr.map(function(xs) {
        return xs.length;
    });
    console.log(wordsLength);


    function partialSums(arr) {
        var result = [];
        if (!arr.length) return result;

        var totalSum = arr.reduce(function(sum, item) {
            result.push(sum);
            return sum + item;
        });
        result.push(totalSum);

        return result;
    }

    console.log(partialSums([1, 2, 3, 4, 5]));

})();