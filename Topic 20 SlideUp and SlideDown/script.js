$(document).ready(function () {
    // Slide Up when the Slide Up button is clicked
    $("#slideUpBtn").click(function () {
        $("#slideBox").slideUp(600);
    });

    // Slide Down when the Slide Down button is clicked
    $("#slideDownBtn").click(function () {
        $("#slideBox").slideDown(600);
    });

    // Slide Toggle when the Slide Toggle button is clicked
    $("#slideToggleBtn").click(function () {
        $("#slideBox").slideToggle(600);
    });

    // Add some keyboard controls for better UX
    $(document).keydown(function (e) {
        // 'U' key for slideUp
        if (e.key === 'u' || e.key === 'U') {
            $("#slideBox").slideUp(600);
        }
        // 'D' key for slideDown
        else if (e.key === 'd' || e.key === 'D') {
            $("#slideBox").slideDown(600);
        }
        // 'T' key for slideToggle
        else if (e.key === 't' || e.key === 'T') {
            $("#slideBox").slideToggle(600);
        }
    });
});