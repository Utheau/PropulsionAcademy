'use strict';
let app = {}

app.Board = function (context) {
  this.context = context;
}

app.Board.prototype.render = function () {

  this.context.fillStyle = 'black';
  this.context.fillRect(0, 0, this.context.canvas.clientWidth, this.context.canvas.clientHeight);
  this.context.beginPath();
  this.context.moveTo(this.context.canvas.clientWidth/2, 0);
  this.context.lineTo(this.context.canvas.clientWidth/2, this.context.canvas.clientHeight);
  this.context.strokeStyle = 'white';
  this.context.stroke();
}
