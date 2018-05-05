(function() {
    $(document).ready(function() {
        $("#celebs tbody tr:even").addClass("zebra");
        $("#disclaimer").addClass("warning");
        $("#hide-button").click(function() {
            $("#disclaimer").hide();
        });
    });
}());