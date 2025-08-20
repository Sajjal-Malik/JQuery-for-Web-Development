$(document).ready(function () {
    // Get dimensions when button is clicked
    $("#get-btn").click(function () {
        const height = $(".box").height();
        const width = $(".box").width();
        const innerHeight = $(".box").innerHeight();
        const innerWidth = $(".box").innerWidth();
        const outerHeight = $(".box").outerHeight();
        const outerWidth = $(".box").outerWidth();

        $(".output").html(`
                    <b>Height/Width Results:</b><br>
                    height(): ${height}px<br>
                    width(): ${width}px<br>
                    innerHeight(): ${innerHeight}px (height + padding)<br>
                    innerWidth(): ${innerWidth}px (width + padding)<br>
                    outerHeight(): ${outerHeight}px (height + padding + border)<br>
                    outerWidth(): ${outerWidth}px (width + padding + border)
                `);
    });

    // Set random dimensions when button is clicked
    $("#set-btn").click(function () {
        const randomWidth = Math.floor(Math.random() * 300) + 100;
        const randomHeight = Math.floor(Math.random() * 250) + 80;

        $(".box").width(randomWidth).height(randomHeight);

        $(".output").html(`
                    Set new dimensions:<br>
                    Width: ${randomWidth}px<br>
                    Height: ${randomHeight}px
                `);
    });
});