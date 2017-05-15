jQuery(document).ready(function($) {

  function resizeProjectPhoto() {
    var $projectPhoto = $('.project-photo');
    if ($projectPhoto.width() > 1100) {
      $projectPhoto.addClass('container');
    }
  }

  $(window).on('resize', resizeProjectPhoto);
  resizeProjectPhoto();
});