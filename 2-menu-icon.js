$(document).on("click", ".menu-icon", function () {
  $(this).toggleClass("active");
  $(this).find("div").removeClass("no-animation");
});
