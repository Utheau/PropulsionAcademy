'use strict';


app.Player = function (name, position, context) {
  this.context = context;
  this.position = position;
  this.name = name;
  this.score = 0;
  this.scoreTime = 0
  this.strikeCounter = 0;
}

app.Player.prototype.render = function () {
  let textToShow = this.name + ": " + this.score;
  this.context.font = "20px Calibri";
  this.context.fillStyle = "green";
  this.context.fillText(textToShow, this.position[0], this.position[1]);
}

app.Player.prototype.scoreMsg = function () {
  this.context.font = "20px Calibri";
  this.context.textAlign = "center";
  this.context.fillStyle = "red";
  this.context.fillText("Point!!", this.context.canvas.clientWidth / 2, 75);
}

app.Player.prototype.strikeMsg = function (msg) {
  this.context.font = "20px Calibri";
  this.context.textAlign = "center";
  this.context.fillStyle = "orange";
  this.context.fillText(msg, this.context.canvas.clientWidth / 2, 150);
}

app.Player.prototype.winMsg = function () {
  this.context.font = "50px Calibri";
  this.context.fillStyle = "pink";
  this.context.textAlign = "center";
  let msg = this.name + " WINS!";
  this.context.fillText(msg, this.context.canvas.clientWidth / 2, this.context.canvas.clientHeight / 2);
}