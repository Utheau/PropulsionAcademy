$(function () {
  $('.js-slide-left').on('click', function () {
    var firstSlide = $('.slide:first-child');
    var newTranslate = firstSlide.position().left - 1200;
    $('.slide').css('transform', 'translateX(' + newTranslate + 'px)');
  });

  $('.js-slide-right').on('click', function () {
    var firstSlide = $('.slide:first-child');
    var newTranslate = firstSlide.position().left + 1200;
    $('.slide').css('transform', 'translateX(' + newTranslate + 'px)');
  });
});