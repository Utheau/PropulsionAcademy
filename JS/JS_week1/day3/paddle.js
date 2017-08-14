'use strict';


app.Paddle = function (context) {
  this.context = context;
  this.position = [this.context.canvas.clientWidth/2, this.context.canvas.clientHeight-20];
  this.width = 50;
  this.height = 10;
  this.speed = 1;
  this.direction = 0;
}


app.Paddle.prototype.render = function () {
  this.context.fillStyle = 'white';
  this.context.fillRect(this.position[0], this.position[1], this.width, this.height);
};


app.Paddle.prototype.move = function () {

  //We don't allow the paddle to go out from the board
  //But we move to the left or right tdepending on the key pressed
  if (this.directionLeft == true) this.position[0] += -this.speed;
  if (this.directionRight == true) this.position[0] += this.speed;
  if (this.direction == 0 ) this.position[0];
  if (this.position[0] < 0 ) this.position[0] = 0;
  if (this.position[0] > this.context.canvas.clientWidth - this.width ) this.position[0] = this.context.canvas.clientWidth - this.width;
};
