function User() {
    var firstName;
    var surname;

    this.setFirstName = function(name) {
        firstName = name;
    };

    this.setSurname = function(name) {
        surname = name;
    };

    this.getFullName = function() {
        return firstName + " " + surname;
    };
}

var user = new User();
user.setFirstName("Petya");
user.setSurname("Ivanov");

console.log(user.getFullName());