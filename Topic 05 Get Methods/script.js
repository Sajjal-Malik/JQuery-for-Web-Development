$(document).ready(function () {
    
    // This will retrieve the html with body text of the selected html element
    let temp1 = $('#box').html()
    console.log(temp1);


    // This is will retrieve the body text only of the selected html element
    let temp2 = $('#box').text()
    console.log(temp2);

    // This will retrieve us the attribute names of the selected html element
    let temp3 = $('#box').attr('class');
    console.log(temp3)

    $('#myForm').submit(function (e) { 
        e.preventDefault();
        
        let name = $('#name').val();
        let email = $('#email').val();

        alert(`My family name is ${name} and My email is ${email}`);
    });

});