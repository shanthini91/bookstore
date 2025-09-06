$(document).ready(function () {
    lightbox.option({
        'wrapAround': true

    });
    $(window).scroll(function () {
        let position = $(this).scrollTop(); 
        if (position >= 350) {
            $('.gallery').addClass('change');
        } else { 
            $('.gallery').removeClass('change'); 
        }
    });
    $(".hamburger-menu").click(function () 
                                   {
                                       $(this).toggleClass("change"); 
                                       $(".bg-cover").toggleClass("change"); 
                                       $(".nav-content").toggleClass("change"); 
                                   });
    // Close menu when any link is clicked //
    $(".nav-content .link-item").click(function () {
        $(".hamburger-menu").removeClass("change");
        $(".bg-cover").removeClass("change");
        $(".nav-content").removeClass("change");
    });
    $('.writers-accordion').click(function (event) {
        if (event.target.id.split('-')[0] === 'button') {
            $('#book-1').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
            $('#book-2').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book2.jpg');
        }
    });
});
