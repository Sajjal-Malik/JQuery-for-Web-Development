$(document).ready(function () {
    $('.btn1').click(function (e) { 
        e.preventDefault();
        $('div#box').append("<h3>Hello All Heading 3</h3>");
        // $('div#box').append("<span>Hello All Span</span>");
    });

    $('.btn2').click(function (e) { 
        e.preventDefault();
        $('div#box').prepend("<h2>Heading</h2>");
        // $('div#box').append("<span>Hello All Span</span>");
    });

    $('.btn1').click(function(){
        $('ol').append('<li>Append into List</li>')
    });

    $('.btn2').click(function(){
        $('ol').prepend('<li>Prepend into List</li>')
    });
});