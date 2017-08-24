$(function () {
  let rows = 10;
  let cols = 10;
  function createGrid(root) {
    for(let i = 0; i < cols; i++) {
      for(let j = 0; j < cols; j++) {
        let cell = $('<div>').addClass('cell');
        root.append(cell);
      }
    }
  };

  let updateState = function() {
    $('.cell').each(function (index, cell) {
      let randomNum = Math.random() * 12;
      if (randomNum < 6) {
        $(cell).addClass('active');
      } else {
        $(cell).removeClass('active');
      }
    });
  }

  setInterval(updateState, 400);

  let $root = $('.container');
  createGrid($root);
});
