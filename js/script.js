$(document).ready(function() {
  // ========== LIGHTBOX ==========
  lightbox.option({
    'wrapAround': true
  });

  // ========== SCROLL EFFECT ==========
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 350) {
      $('.gallery').addClass('change');
    } else {
      $('.gallery').removeClass('change');
    }
  });

  // ========== WRITERS ACCORDION ==========
  $('.writers-accordion').click(function(event) {
    if (event.target.id && event.target.id.split('-')[0] === 'button') {
      let writer = event.target.id.split('-')[1];
      $('#book-1').attr('src', 'img/writers/' + writer + '-book1.jpg');
      $('#book-2').attr('src', 'img/writers/' + writer + '-book2.jpg');
    }
  });

  // ========== HAMBURGER MENU ==========
  const nav = $('.nav-content');
  const bgCover = $('.bg-cover');
  const hamburger = $('.hamburger-menu');

  function toggleMenu() {
    nav.toggleClass('active');
    bgCover.toggleClass('active');
  }

  // Open / Close on click
  hamburger.click(function() {
    toggleMenu();
  });

  // Close nav when clicking overlay
  bgCover.click(function() {
    toggleMenu();
  });

  // Close nav when clicking a link
  $('.link-item').click(function() {
    toggleMenu();
  });
});
