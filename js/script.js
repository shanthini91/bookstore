$(document).ready(function () {
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

  // Close menu when clicking outside nav (overlay area)
  $(document).click(function (e) {
    if (
      !$(e.target).closest(".navigation, .hamburger-menu").length &&
      $(".navigation").hasClass("change")
    ) {
      $(".navigation").removeClass("change");
    }
  });

  // =========================
  // Scroll Events
  // =========================
  $(window).on("scroll", function () {
    let position = $(this).scrollTop();

    // Gallery animation trigger
    if (position >= 350) {
      $(".gallery").addClass("change");
    } else {
      $(".gallery").removeClass("change");
    }
  });

  // =========================
  // Writers Accordion Image Swap
  // =========================
  $(".writers-accordion").on("click", "button", function () {
    let writer = this.id.replace("button-", "");
    if (writer) {
      $("#book-1").attr("src", `img/writers/${writer}-book1.jpg`);
      $("#book-2").attr("src", `img/writers/${writer}-book2.jpg`);
    }
  });

  // =========================
  // Smooth Scrolling
  // =========================
  $(".nav-link").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      let target = this.hash;
      $("html, body").animate(
        { scrollTop: $(target).offset().top - 50 }, // adjust offset if navbar covers content
        700
      );
    }
  });
});
