$(document).ready(function () {
    
    // This will set the html with body text of the selected html element
    $('#myBtn').on('click', function () {
        $('#box h3').html("Change the  <strong><em>HTML TEXT</em></strong> of H2 Element");
    });

    // This will set the body text of the selected html element
    // $('#myBtn').on('click', function () {
    //     $('#box h3').text("Change the  <strong><em>HTML TEXT</em></strong> of H2 Element");
    // });
    
    // This will retrieve us the attribute names of the selected html element 
    $('#myBtn').on('click', function () {
        $('#box').attr('class', 'setPurple');
        $('#box').css('color', 'white');
    });
    
    $('#myBtn').on('click', function () {
        $('#name').val("Malik Bhatti");
        $('#email').val("malik@gmail.com");

    });

});