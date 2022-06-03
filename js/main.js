$(function () {
  $('.photogallery__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrowleft.svg" alt=""/></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrowright.svg" alt=""/></button>'
  });

  $('.about__popup').on('click', function (event) {
    event.stopPropagation()
    $('.video__play').toggleClass('video__play--active');
    $('.about__img').toggleClass('about__img--active');
    $('.about__popup-img').toggleClass('about__popup-img--active');
    if ($('.video__play').hasClass('video__play--active')) {
      $('.video__play').trigger('play');

    } else {
      $('.video__play').trigger('pause')
    }

  });
  $('.video__play').on('click', function (event) {
    event.preventDefault()
  })
});
