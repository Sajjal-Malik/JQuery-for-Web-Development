$(document).ready(function(){

    // $('.btn').bind('click', function(){
    //     $('#box').css('background-color', 'red');
    // });
    // $('.btn').unbind('click', function(){
    //     $('#box').css('background-color', 'red');
    // });


    $('.btn').click(function(){
        $('#box').css('background-color', 'red');
        $('#box').css('color', 'white');
        // let a = $('div').html();
        // console.log(a);
    });

    $('.btn').dblclick(function(){
        $('#box').css('background-color', 'green');
        $('#box').css('color', 'white');
    });


    // Context Menu means Right click from the Mouse
    $('.btn').contextmenu(function(){
        $('#box').css('background-color', 'blue');
        $('#box').css('color', 'white');
    });
    
    
    $('.btn').mouseenter(function () { 
        $('#box').css('background-color', 'yellow');
        $('#box').css('color', 'black');
    });
    
    $('.btn').mouseleave(function () { 
        $('#box').css('background-color', 'purple');
        $('#box').css('color', 'white');
    });
    
    
    // $('.btn').mouseover(function () { 
    //     $('#box').css('background-color', 'orange');
    //     $('#box').css('color', 'white');
    // });
    
    // $(selector).mouseout(function () { 
    //     $('#box').css('background-color', 'magenta');
    //     $('#box').css('color', 'black');
    // });

});