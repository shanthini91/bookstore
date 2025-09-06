$(document).ready(function () {
  // ✅ Lightbox setup (with safety check)
  if (typeof lightbox !== "undefined") {
    lightbox.option({
      wrapAround: true,
    });
  }

  // ✅ Scroll effect (with throttling for performance)
  let scrollTimeout;
  $(window).on("scroll", function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const position = $(this).scrollTop();
      $(".gallery").toggleClass("change", position >= 350);
    }, 50); // throttle scroll events
  });

  // ✅ Writers accordion image switching
  $(".writers-accordion").on("click", function (event) {
    const targetId = event.target.id;
    if (!targetId.startsWith("button-")) return;

    const writer = targetId.split("-")[1]; // e.g. William_Shakespeare
    $("#book-1").attr("src", `img/writers/${writer}-book1.jpg`);
    $("#book-2").attr("src", `img/writers/${writer}-book2.jpg`);
  });
});
