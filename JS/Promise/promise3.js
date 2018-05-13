"use strict";

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("result"), 3000);
    setTimeout(() => reject(new Error("error")), 1000);
});

promise
    .then(
        result => console.log("Fulfilled: " + result),
        error  => console.log("Rejected: " + error.message)
    );