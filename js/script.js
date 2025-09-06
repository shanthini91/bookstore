$(document).ready(function() {
    lightbox.option({
        'wrapAround': true
      });

      $(window).scroll(function() {
        let position = $(this).scrollTop();
        
        if(position >= 350) {
            $('.gallery').addClass('change');
        } else {
            $('.gallery').removeClass('change');
        }

      });
// Hamburger menu toggle
  $(".hamburger-menu").click(function () {
    $(this).toggleClass("change");
    $(".bg-cover").toggleClass("change");
    $(".nav-content").toggleClass("change");
  });

  // ✅ Close hamburger and menu on link click
$(".nav-content .link-item").click(function () {
  // Reset hamburger icon
  $(".hamburger-menu").removeClass("change");

  // Close overlay
  $(".bg-cover").removeClass("change");

  // Hide nav content
  $(".nav-content").removeClass("change");
});

      $('.writers-accordion').click(function(event) {
        
        if(event.target.id.split('-')[0] === 'button') {
           $('#book-1').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
           $('#book-2').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book2.jpg');
        }

      });
});



































