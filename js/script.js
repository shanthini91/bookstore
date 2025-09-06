$(document).ready(function () {
  // Lightbox settings
  lightbox.option({
    wrapAround: true
  });

  // Gallery scroll effect
  $(window).scroll(function () {
    let position = $(this).scrollTop();

    if (position >= 350) {
      $(".gallery").addClass("change");
    } else {
      $(".gallery").removeClass("change");
    }
  });

  // Writers accordion - updates book images dynamically
  $(".writers-accordion").click(function (event) {
    let idParts = event.target.id.split("-");
    if (idParts[0] === "button") {
      let writer = idParts[1];
      $("#book-1").attr("src", "img/writers/" + writer + "-book1.jpg");
      $("#book-2").attr("src", "img/writers/" + writer + "-book2.jpg");
    }
  });

  // Hamburger menu toggle
  $(".hamburger-menu").click(function () {
    $(this).toggleClass("change");
    $(".bg-cover").toggleClass("change");
    $(".nav-content").toggleClass("change");
  });
});
