$(document).ready(function() {
    // 1. Basic scroll event - track scroll position
    $(window).scroll(function() {
        const scrollPosition = $(this).scrollTop();
        
        // Update scroll info in navbar
        $('#scroll-info').text('Scroll Y: ' + Math.round(scrollPosition) + 'px');
        
        // Change navbar style on scroll
        if (scrollPosition > 100) {
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
        
        // Animate progress bar based on scroll
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();
        const scrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100;
        $('.progress-fill').css('width', scrollPercent + '%');
        
        // Show sections when they come into view
        $('.section').each(function() {
            const sectionTop = $(this).offset().top;
            const sectionBottom = sectionTop + $(this).outerHeight();
            
            if (scrollPosition + windowHeight * 0.8 > sectionTop && 
                scrollPosition < sectionBottom - windowHeight * 0.2) {
                $(this).addClass('visible');
            }
        });
    }).scroll(); // Trigger scroll event on page load

    // 2. Smooth scroll to top
    $('#scrollToTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    // 3. Smooth scroll to specific section
    $('#scrollToSection2').click(function() {
        const section2Top = $('#section2').offset().top;
        $('html, body').animate({
            scrollTop: section2Top
        }, 1000);
    });

    // 4. Scroll to element with offset (for fixed navbar)
    function scrollToElement(element, offset = 80) {
        const elementTop = $(element).offset().top - offset;
        $('html, body').animate({
            scrollTop: elementTop
        }, 800);
    }

    // 5. Scroll event with throttling for performance
    let scrolling = false;
    $(window).scroll(function() {
        if (!scrolling) {
            scrolling = true;
            setTimeout(function() {
                // Your scroll handling code here
                scrolling = false;
            }, 100);
        }
    });

    // 6. Detect scroll direction
    let lastScrollTop = 0;
    $(window).scroll(function() {
        const scrollTop = $(this).scrollTop();
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            $('#navbar').css('transform', 'translateY(-100%)');
        } else {
            // Scrolling up
            $('#navbar').css('transform', 'translateY(0)');
        }
        lastScrollTop = scrollTop;
    });

    // 7. Scroll to element on page load with hash in URL
    if (window.location.hash) {
        setTimeout(function() {
            scrollToElement(window.location.hash);
        }, 100);
    }

    console.log('jQuery scroll methods loaded successfully!');
});