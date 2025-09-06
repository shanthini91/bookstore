$(document).ready(function() {
    lightbox.option({
        'wrapAround': true
    });

    // Gallery scroll animation
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        
        if(position >= 350) {
            $('.gallery').addClass('change');
        } else {
            $('.gallery').removeClass('change');
        }
    });

    // Hamburger icon animation & bg-cover scale
    $(".hamburger-menu").click(function() {
        $(this).toggleClass("change");
        $(".bg-cover").toggleClass("change");
    });

    // Smooth scroll & close menu
    $(".nav-content .link-item").click(function(e) {
        e.preventDefault();

        let target = $(this).attr("href");

        // Animate scroll to section
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 800);

        // Close Bootstrap collapse
        $('#myNavbar').collapse('hide');

        // Reset hamburger icon & bg-cover
        $(".hamburger-menu").removeClass("change");
        $(".bg-cover").removeClass("change");
    });

    // Writers accordion
    $('.writers-accordion').click(function(event) {
        if(event.target.id.split('-')[0] === 'button') {
           $('#book-1').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
           $('#book-2').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book2.jpg');
        }
    });
});
