$(document).ready(function () {
    $('.btn1').click(function(e){
        $('#box h2').replaceWith('<h1>Hello World</h1>');
    });

    $('.btn1').click(function(e){
        $('#box h2').replaceAll('<h1>Hello World</h1>');
    });
});