"use strict";

var XMLHttpRequest = require("xhr2");

function httpGet(url) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open("GET",url, true);

        request.onload = () => {
            if (this.status == 200) {
                resolve(this.response);
            }
            else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        request.onerror = () => {
            reject(new Error("Network error"));
        };

        request.send();
    });
}

httpGet("https://www.npmjs.com/package/xhr2")
    .then(
        response => console.log(`Fulfilled: ${response}`),
        error    => console.log(`Rejected: ${error}`)
    );