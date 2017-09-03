$(function () {
  var initialPos = $('.horizontal-scroll').position().left;
  var width = $('.horizontal-scroll').width();
  var totalWidth = $('.item:last-child').position().left + $('.item:last-child').width();
  var lastPage = totalWidth - width;

  $('.js-scroll-left').on('click', function () {
    var currentPosition = $('.horizontal-scroll').position().left;
    if (Math.abs(currentPosition) < lastPage) {
      var newTranslate = currentPosition - 200;
      $('.horizontal-scroll').css('transform', 'translateX(' + newTranslate + 'px)');
    }
  });

  $('.js-scroll-right').on('click', function () {
    var currentPosition = $('.horizontal-scroll').position().left;
    if (currentPosition < initialPos) {
      var newTranslate = currentPosition + 200;
      $('.horizontal-scroll').css('transform', 'translateX(' + newTranslate + 'px)');
    }
  });
})