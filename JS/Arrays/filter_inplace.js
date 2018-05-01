function filterRangeInPlace(arr, a, b) {
    arr.forEach((elem, index) => {
        if (elem >=a && elem <= b) {
            arr.splice(index, 1);
        }
    });
}

let arr = [1, 5, 4, 7, 2];
filterRangeInPlace(arr, 1, 4);
console.log(arr);