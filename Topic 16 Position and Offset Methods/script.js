$(document).ready(function() {
    // Calculate and display position and offset values
    function calculateValues() {
        // Get position and offset
        var position = $('#target').position();
        var offset = $('#target').offset();
        
        // Update the display
        $('#position-left').text(position.left);
        $('#position-top').text(position.top);
        $('#offset-left').text(offset.left);
        $('#offset-top').text(offset.top);
    }
    
    // Calculate values when button is clicked
    $('#calculate-btn').click(function() {
        calculateValues();
    });
    
    // Calculate values when target element is clicked
    $('#target').click(function() {
        calculateValues();
    });
    
    // Calculate values on page load
    calculateValues();
    
    // Recalculate values when window is resized
    $(window).resize(function() {
        calculateValues();
    });
});