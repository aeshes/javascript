"use strict";

function removeClass(obj, cls) {
    let classes = obj.className.split(" ");
    let filtered = classes.filter((clsName) => {
        return clsName != cls;
    });
    obj.className = filtered.join(" ");
}

let obj = {
    className: "open menu menu my"
};

removeClass(obj, "menu");
console.log(obj.className);