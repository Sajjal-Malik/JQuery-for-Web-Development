$(document).ready(function() {
    // Box 1: Slide right animation
    $('#box1').click(function() {
        $(this).animate({
            left: '+=200px',
            opacity: 0.8
        }, 1000, function() {
            console.log('Box 1 animation completed!');
        });
    });

    // Box 2: Fade and grow animation
    $('#box2').click(function() {
        $(this).animate({
            opacity: 0.5,
            width: '+=100px',
            height: '+=100px'
        }, 1500, 'swing');
    });

    // Box 3: Color change animation (requires jQuery UI for color animations)
    $('#box3').click(function() {
        $(this).animate({
            backgroundColor: '#FF5722',
            color: '#000',
            fontSize: '18px'
        }, 1200);
    });

    // Box 4: Multiple properties with different easing
    $('#box4').click(function() {
        $(this).animate({
            marginLeft: '300px',
            borderRadius: '50%',
            rotate: '360deg'
        }, 2000, 'easeInOutElastic');
    });

    // Animate all boxes at once
    $('#animateAll').click(function() {
        // Box 1
        $('#box1').animate({ left: '200px' }, 1000);
        
        // Box 2
        $('#box2').animate({ 
            width: '200px', 
            height: '200px',
            opacity: 0.7
        }, 1200);
        
        // Box 3
        $('#box3').animate({
            backgroundColor: '#FF5722',
            marginTop: '50px'
        }, 1500);
        
        // Box 4
        $('#box4').animate({
            marginLeft: '300px',
            borderRadius: '50%'
        }, 1800);
    });

    // Reset all animations
    $('#resetAll').click(function() {
        $('.box').stop(true).animate({
            left: '0px',
            width: '100px',
            height: '100px',
            opacity: 1,
            marginLeft: '20px',
            marginTop: '20px',
            borderRadius: '10px',
            backgroundColor: function() {
                // Reset to original colors
                const id = $(this).attr('id');
                const colors = {
                    'box1': '#4CAF50',
                    'box2': '#2196F3',
                    'box3': '#FF9800',
                    'box4': '#9C27B0'
                };
                return colors[id];
            },
            color: 'white',
            fontSize: '16px'
        }, 800);
    });

    // Custom animation with queue
    $('#customAnimate').click(function() {
        $('#customBox')
            .animate({ left: '300px' }, 1000)
            .animate({ top: '100px' }, 800)
            .animate({ left: '0px' }, 1000)
            .animate({ top: '0px' }, 800);
    });

    // Draggable functionality for custom box
    let isDragging = false;
    $('#customBox').on({
        mousedown: function(e) {
            isDragging = true;
            $(this).css('cursor', 'grabbing');
        },
        mousemove: function(e) {
            if (isDragging) {
                $(this).css({
                    left: e.pageX - $(this).width() / 2,
                    top: e.pageY - $(this).height() / 2
                });
            }
        },
        mouseup: function() {
            isDragging = false;
            $(this).css('cursor', 'move');
        }
    });

    // Prevent text selection while dragging
    $(document).on('selectstart', function(e) {
        if (isDragging) {
            e.preventDefault();
            return false;
        }
    });
});