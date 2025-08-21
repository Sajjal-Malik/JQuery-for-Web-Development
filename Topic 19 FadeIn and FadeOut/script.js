$(document).ready(function () {
    // Fade Out the box
    $("#fadeOutBtn").click(function () {
        $("#box").fadeOut(1000); // 1000ms = 1 second
    });

    // Fade In the box
    $("#fadeInBtn").click(function () {
        $("#box").fadeIn(1000);
    });

    // Toggle fade the box
    $("#fadeToggleBtn").click(function () {
        $("#box").fadeToggle(800);
    });

    // Fade to specific opacity (0.5 = 50%)
    $("#fadeToBtn").click(function () {
        $("#box").fadeTo(800, 0.5);
    });

    // Fade list items one by one
    $("#fadeListBtn").click(function () {
        $("#fadeList li").each(function (index) {
            $(this).delay(300 * index).fadeTo(500, 0.3);
        });
    });

    // Reset list items when clicked
    $("#fadeList li").click(function () {
        $(this).fadeTo(300, 1);
    });

    // Bonus: Add some initial animation when page loads
    $(".container").hide().fadeIn(1500);
    $("h1").css("opacity", 0).animate({ opacity: 1 }, 2000);
});