"use strict";

function User(fullName) {
    this.fullName = fullName;

    Object.defineProperty(this, "firstName", {
        get: function() {
            return this.fullName.split(" ")[0];
        },

        set: function(value) {
            this.fullName = value + " " + this.lastName;
        }
    });

    Object.defineProperty(this, "lastName", {
        get: function() {
            return this.fullName.split(" ")[1];
        },

        set: function(value) {
            this.fullName = this.firstName + " " + value;
        }
    });
}

var vovo = new User("Vovo Pupkin");

console.log(vovo.firstName);
console.log(vovo.lastName);

vovo.lastName = "Sidorov";

console.log(vovo.lastName);
console.log(vovo.fullName);