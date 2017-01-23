jQuery(document).ready(function($) {

function resizeProjectPhoto() {
  var $projectPhoto = $('.project-photo');
  if ($projectPhoto.width() > 1100) {
    $projectPhoto.addClass('container');
  }
}

  $(window).on('resize', resizeProjectPhoto);

  $(document).scroll(function(){
    var lastPageYOffset = 0;
    var $nav = $('nav');
    var currentPageYOffset = $(this).scrollTop();

    if (currentPageYOffset > lastPageYOffset ) {
      $nav.css({
        // 'padding-top': '1.3em',
        'transform': 'translate3d(0, -30%, 0)',
        'transition': '.4s'
      }).find('.contact-nav').css({
        'margin-top': '1.6em',
        'transition': '.4s'
      }).find('.contact-nav__link svg#Layer_1').css({
        'width': '24px',
        'transition': '.4s'
      });
    } else {
      $nav.css({
        // 'padding-top': '.625em',
        'transform': 'translate3d(0, 0, 0)',
        'transition': '.4s'
      }).find('.contact-nav').css({
        'margin-top': '1em',
        'transition': '.4s'
      }).find('.contact-nav__link svg#Layer_1').css({
        'width': 'initial',
        'transition': '.4s'
      });
    }
  });

resizeProjectPhoto();

});