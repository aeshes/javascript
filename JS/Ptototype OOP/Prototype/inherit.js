function Main() {
    this.method = function() {
        console.log("method");
    };
}

Main.staticMethod = function() {
    console.log("staticMethod");
}

Main.prototype.baseMethod = function() {
    console.log("baseMethod");
};

var main = new Main;

main.method();
Main.staticMethod();
main.baseMethod();