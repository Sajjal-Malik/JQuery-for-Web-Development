$('document').ready(function(){

    // ------- Deprecated Method now a days --------
    // $('body').keypress(function (event) { 
    //     event.preventDefault();
    //     $('body').css('background-color', 'red');
    // });

    // ------- Preferred Optin instead of keypress()
    $('body').keydown(function (e) { 
        e.preventDefault();
        $('body').css('background-color', 'yellow');
    });

    $('body').keyup(function (e) { 
        e.preventDefault();
        $('body').css('background-color', 'blue');
    });


});