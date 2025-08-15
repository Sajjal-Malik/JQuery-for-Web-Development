$(document).ready(function () {
    $('.btn1').click(function (e) { 
        e.preventDefault();
        $('div#box').before("<h3>Hello All Heading 3</h3>");
        // $('div#box').append("<span>Hello All Span</span>");
    });

    $('.btn2').click(function (e) { 
        e.preventDefault();
        $('div#box').after("<h2>Heading</h2>");
        // $('div#box').after("<span>Hello All Span</span>");
    });

    $('.btn1').click(function(){
        $('ol').before('<li>Before the List</li>')
    });

    $('.btn2').click(function(){
        $('ol').after('<li>After into List</li>')
    });
});