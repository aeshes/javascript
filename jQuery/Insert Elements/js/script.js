(function() {
    $(document).ready(function() {
        $("<input type='button' value='toggle' id='toggle-button'>")
            .insertAfter("#disclaimer");
        $("#toggle-button").click(function() {
            $("#disclaimer").toggle();
        });
    });

    $("<div>", {
        id: "special-button",
        text: "Click me!",
        click: function() {
            alert("Advanced jQuery");
        }
    }).insertBefore("#disclaimer");
}());