$(function() {
  // toggle dropdown and close tag on mobile
  $("#nav-icon").click(function() {
    $(this)
      .toggleClass("open")
      .next("#dropdown")
      .slideToggle("500");
  });

  $("#projects")
    .find("a")
    .on("hover", function(e) {
      console.log("hover");
    });

  // hover effect on project thumbnails
  const $projects = $("#projects li");
  $projects.hover(function(e) {
    let $this = $(this);
    $projects.not($this).toggleClass("blur");
  });
});
