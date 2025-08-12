$(document).ready(function () {
    console.log("This is About JQuery form Events");

    // Focus, Blur, Change, Select, Submit
    $('#exampleInputEmail1').focus(function (e) { 
        e.preventDefault();
        $(this).css({
            'background-color': 'blue',
            'color': 'white'
        });
    });


    $('#exampleInputPassword1').blur(function (e) { 
        e.preventDefault();
       $(this).css(alert("This input field has lost its focus.")); 
    });


    $('#exampleInputSelectOption1').change(function (e) { 
        e.preventDefault();
        $(this).css('background-color','red');
        $(this).css('color','white');
        $('#onlyPara').html($(this).val());  // This val() will get the value from the value="" attribute of the html element.
    });


    $('#exampleInputPassword1').select(function () { 
        $(this).css('background-color', 'magenta');
    });

    $('#myForm').submit(function (e) { 
        e.preventDefault();
        alert("Form is submitted Successfully!");
    });
});