let obj = {
    className: "open mymenu"
};

function addClass(obj, cls) {
    let classes = obj.className ? obj.className.split(" ") : [];

    if (classes.indexOf(cls) == -1) {
        classes.push(cls);
        obj.className = classes.join(" ");
    }
}

addClass(obj, "new");
addClass(obj, "open");
addClass(obj, "me");
addClass(obj, "menu");

console.log(obj.className);