$(document).ready(function () {
    $('#wrapBtn').click(function (e) { 
        e.preventDefault();
        $('#box p').wrap('<h2 id="getRedColor"></h2>');
    });

    $('#unWrapBtn').click(function (e) { 
        e.preventDefault();
        $('#box p').unwrap();
    });

    $('#wrapAllBtn').click(function (e) { 
        e.preventDefault();
        $('#box p').wrapAll('<h1></h1>');
    });


});