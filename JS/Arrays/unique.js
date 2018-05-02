function unique(arr) {
    let result = {};
    for (let i = 0; i < arr.length; ++i) {
        result[arr[i]] = true;
    }
    return Object.keys(result);
}

var strings = ["Krishna", "Krishna", "hare", "hare",
  "hare", "hare", "Krishna", "Krishna", "8-()"
];

console.log(unique(strings));