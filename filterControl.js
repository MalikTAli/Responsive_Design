$(document).ready(function () {
  $(".filter-header").on("click", function () {
    let icon = $(this).find(".toggle-icon");
    let list = $(this).next("ul");

    list.slideToggle(200).toggleClass("d-none");

    if (icon.hasClass("bi-plus")) {
      icon.removeClass("bi-plus").addClass("bi-dash");
    } else {
      icon.removeClass("bi-dash").addClass("bi-plus");
    }
  });
});
