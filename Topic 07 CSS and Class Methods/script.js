$(document).ready(function () {

    let count = 0;
    $('#firstBtn').on('click', function(){
        console.log("Button Clicked ", ++count);
        $('div#box').css({
            'background': 'black',
            'color': 'white'
        });
    });

    $('#secondBtn').on('click', function () {
        $('div#box').addClass('addBgRed');
    });

    $('#thirdBtn').on('click', function () {
        $('div#box').addClass('addBgGreen');
    });

    // $('#secondBtn').on('click', function () {
    //     $('div#box').removeClass('setBgRed');
    // });

    // $('#thirdBtn').on('click', function () {
    //     $('div#box').removeClass('setBgGreen');
    // });

    $('#fourthBtn').on('click', function () {
        $('div#box').toggleClass('toggleBgYellow');
    });

});