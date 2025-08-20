$(document).ready(function () {
    // Show the content
    $("#showBtn").click(function () {
        $("#contentBox").show();
    });

    // Hide the content
    $("#hideBtn").click(function () {
        $("#contentBox").hide();
    });

    // Toggle the content
    $("#toggleBtn").click(function () {
        $("#contentBox").toggle();
    });
});