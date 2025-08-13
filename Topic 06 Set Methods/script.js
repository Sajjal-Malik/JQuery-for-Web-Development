$(document).ready(function () {

    // Set the text of an element
    $("#myDiv").text("Hello World!");

    // This will change: <div id="myDiv"></div>
    // To: <div id="myDiv">Hello World!</div>

    // Set HTML content (can include tags)
    $("#container").html("<p>New <strong>content</strong></p>");

    // This will change: <div id="container"></div>
    // To: <div id="container"><p>New <strong>content</strong></p></div>

    // Set value of an input field
    $("#username").val("john_doe");

    // Set value of a dropdown
    $("#colors").val("blue");

    // Set a single attribute
    $("#myImage").attr("src", "new-image.jpg");

    // Set multiple attributes at once
    $("#myLink").attr({
        "href": "https://example.com",
        "title": "Visit Example"
    });

});