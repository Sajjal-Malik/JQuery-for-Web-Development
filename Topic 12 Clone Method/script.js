$(document).ready(function () {
    $('.btn1').click(function(e){
        $('#box2').append($('#box1').clone());
    });
});