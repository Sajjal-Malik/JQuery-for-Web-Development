$(document).ready(function () {
    
    $('.btn1').click(function (e) { 
        e.preventDefault();
        // $('#box').empty();
        $('h2').empty();
    });

    $('.btn2').click(function (e) { 
        e.preventDefault();
        // $('#box').empty();
        $('h2').remove();
    });

});