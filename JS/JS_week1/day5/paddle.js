'use strict';


app.Paddle = function (position, context) {
  this.context = context;
  this.position = position;
  this.width = 10;
  this.height = 60;
  this.speed = 4;
  this.direction = 0;
}


app.Paddle.prototype.render = function () {
  this.context.fillStyle = 'white';
  this.context.fillRect(this.position[0], this.position[1], this.width, this.height);
};


app.Paddle.prototype.move = function () {

  if (this.directionTop == true) this.position[1] += -this.speed;
  if (this.directionBottom == true) this.position[1] += this.speed;
  if (this.direction == 0) this.position[1];
  if (this.position[1] < 0) this.position[1] = 0;
  if (this.position[1] > this.context.canvas.clientHeight - this.height) this.position[1] = this.context.canvas.clientHeight - this.height;
};