(function() {
    let user = {};
    user.name = "Vasya";
    user.surname = "Petrov";

    console.log(user.name);

    user["name"] = "Sergay";
    console.log(user.name);

    delete user.name;
    console.log(user.name);
}());