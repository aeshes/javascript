(function() {
    'use strict';

    var users = [
        {
            name: "Vasya",
            surname: "Ivanov",
            age: 20
        },
        {
            name: "Petya",
            surname: "Chapaev",
            age: 25
        },
        {
            name: "Masha",
            surname: "Medvedeva",
            age: 18
        }
    ];

    function byField(field) {
        return function(a, b) {
            return a[field] > b[field] ? 1 : -1;
        };
    }

    users.sort(byField('name'));
    console.log(users);

    users.sort(byField('age'));
    users.forEach(function(user) {
        console.log(user.name);
    });
})();