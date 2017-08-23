'use strict';


app.Ball = function (radius, position, context, players) {
  this.radius = radius;
  this.position = position;
  this.context = context;
  this.players = players;
  this.speed = 0.1;
  this.changeRightY = false;
  this.changeLeftY = false;
  this.direction = [2,2];
}

app.Ball.prototype.render = function () {
  this.context.beginPath();
  this.context.fillStyle = 'white';
  this.context.fill();
  this.context.arc(this.position[0], this.position[1], this.radius, 0,2*Math.PI);
  this.context.stroke();
};


app.Ball.prototype.move = function (paddleLeft, paddleRight) {
  let xPositionRadius = this.position[0] + this.radius * this.direction[0];
  let yPositionRadius = this.position[1] + this.radius * this.direction[1];
  this.paddleColission(paddleLeft, paddleRight, xPositionRadius, yPositionRadius);
  this.boardCollision(xPositionRadius, yPositionRadius);
  this.position[0] += this.direction[0];
  this.position[1] += this.direction[1];
};

app.Ball.prototype.boardCollision = function (xPositionRadius, yPositionRadius){

  if (yPositionRadius <= 0){
      this.direction[1] *= -1
      this.position[1] = 0 + this.radius;
    };
    if (yPositionRadius >= this.context.canvas.clientHeight){
      this.direction[1] *= -1
      this.position[1] = this.context.canvas.clientHeight - this.radius;
    };
    if (xPositionRadius <= 0){
      this.direction[0] *= -1;
      this.position[0] = 0 + this.radius;
      this.players[1].score++;
      this.players[1].strikeCounter++;
      this.players[0].strikeCounter--;
      this.players[1].scoreTime = new Date().getTime();
    };
    if (xPositionRadius >= this.context.canvas.clientWidth){
      this.direction[0] *= -1
      this.position[0] = this.context.canvas.clientWidth - this.radius;
      this.players[0].score++;
      this.players[1].strikeCounter--;
      this.players[0].strikeCounter++;
      this.players[0].scoreTime = new Date().getTime();
    }
}


 app.Ball.prototype.paddleColission = function (paddleLeft, paddleRight, xPositionRadius, yPositionRadius) {
   if (this.position[0]-this.radius <= paddleLeft.position[0] + paddleLeft.width &&
       this.position[1] >= paddleLeft.position[1] &&
       this.position[1] <= paddleLeft.position[1] + paddleLeft.height &&
       this.direction[0] < 0
     ){
       this.position[0] = paddleLeft.position[0] + paddleLeft.width + this.radius;
       this.direction[0] *= (this.direction[0] > -5) ? (-1 - this.speed) : -1;
       if (this.changeLeftY === true) this.direction[1] *= -1;
   }

  if (this.position[0] + this.radius >= paddleRight.position[0] &&
      this.position[1] >= paddleRight.position[1] &&
      this.position[1] <= paddleRight.position[1] + paddleRight.height &&
      this.direction[0] > 0
    ){
      this.position[0] = paddleRight.position[0] - this.radius;
      this.direction[0] *= (this.direction[0] < 5) ? (-1 - this.speed) : -1;
      if (this.changeRightY === true) this.direction[1] *= -1;
  }
}
