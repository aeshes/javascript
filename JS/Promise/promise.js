"use strict";

let asyncSum = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number'
                && typeof b === 'number')
            {
                resolve(a+b);
            }
            else {
                reject("Arguments must be numbers");
            }
        }, 2000);
    });
}

asyncSum(3,7)
    .then((result) => {
        console.log(result);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });