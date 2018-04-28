(function() {
    function isEmpty(obj) {
        let counter = 0;

        for (let key in obj) {
            ++counter;
        }

        return counter == 0;
    };

    let shedule = {};

    console.log(isEmpty(shedule));

    shedule["8:30"] = "Подъем";

    console.log(isEmpty(shedule));
}());