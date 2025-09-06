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
