'use strict';
let app = {}

app.Board = function (context) {
  this.context = context;
}


app.Board.prototype.render = function () {
  this.context.fillStyle = 'black';
  this.context.fillRect(0, 0, this.context.canvas.clientWidth, this.context.canvas.clientHeight);
}
