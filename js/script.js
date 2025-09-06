$(document).ready(function() {
  // Toggle menu
  $('.hamburger-menu').click(function() {
    $('.navigation').toggleClass('change');
  });

  // Close menu on nav link click
  $('.link-item').click(function() {
    $('.navigation').removeClass('change');
  });

  // Lightbox
  lightbox.option({
    'wrapAround': true
  });

  // Gallery animation
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 350) {
      $('.gallery').addClass('change');
    } else {
      $('.gallery').removeClass('change');
    }
  });

  // Writers accordion
  $('.writers-accordion').click(function(event) {
    if (event.target.id.split('-')[0] === 'button') {
      $('#book-1').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
      $('#book-2').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book2.jpg');
    }
  });
});
