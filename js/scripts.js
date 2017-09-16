$(function() {
  $("#nav-icon").click(function() {
    $(this)
      .toggleClass("open")
      .next("#dropdown")
      .slideToggle("500");
  });
});
