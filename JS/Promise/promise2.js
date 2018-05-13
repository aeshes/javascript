"use strict";

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Time out"));
    }, 1000);
});

promise
    .then(
        result => console.log("Fullfiled: " + result),
        error  => console.log("Rejected: " + error.message)
    );