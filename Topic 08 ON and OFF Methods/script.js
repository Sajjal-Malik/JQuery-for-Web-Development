$(document).ready(function () {
    // $('#box').on('mouseenter mouseleave', function() {
    //     $(this).toggleClass('addBgRed');
    // });   

    $('#myBtn').on({
        'click': function () {
            $('#box').css('background-color', 'red');
        }
    });

    $('#box').on({
        'mouseenter': function () {
            $(this).css('background-color', 'blue');
        },
        'mouseleave': function () {
            $(this).css('background-color', 'green');
        }
    });

    $('#newBtn').click(function () {
        $('#myBtn').off("click");
    });

});