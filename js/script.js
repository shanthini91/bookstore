$(document).ready(function() {
    lightbox.option({
        'wrapAround': true
      });

  // =========================
  // Hamburger Menu Toggle
  // =========================
  $(".hamburger-menu").click(function () {
    $(".navigation").toggleClass("change");
  });

  // Close menu on nav link click
  $(".nav-link").click(function () {
    $(".navigation").removeClass("change");
  });

      $('.writers-accordion').click(function(event) {
        
        if(event.target.id.split('-')[0] === 'button') {
           $('#book-1').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
           $('#book-2').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book2.jpg');
        }

      });
});

































