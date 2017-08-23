'use strict';


app.Game = function () {

  this.width = 600;
  this.height = 400;
  this.intervalId = 0;
  this.players = [];
  this.maxScore;
  this.prepareDOM();
  this.createPlayers();
  this.board = new app.Board(this.canvasContext);
  this.ball = new app.Ball(5, [100,350], this.canvasContext, this.players);
  this.paddleLeft = new app.Paddle([30, this.height /2], this.canvasContext);
  this.paddleRight = new app.Paddle([this.width - 30,this.height /2], this.canvasContext);
  this.listeners();
}


app.Game.prototype.play = function () {

  this.board.render();

  for (let i = 0; i < this.players.length; i++) this.players[i].render();

  this.ball.render();
  this.paddleLeft.render();
  this.paddleRight.render();
  this.intervalId = setInterval(this.resetCanvas.bind(this), 10);
};


app.Game.prototype.resetCanvas = function () {


  this.board.render ();

  for (let i = 0; i < this.players.length; i++){
    if (this.players[i].score === this.maxScore){
      this.players[i].winMsg();
      clearInterval(this.intervalId);
      setTimeout(function(){
        if (confirm("Do you want to play again?")){
          document.location.reload();
        }
      }, 1000);
    }
    this.players[i].render();
  }


  this.scoreMessages();
  this.ball.move(this.paddleLeft, this.paddleRight);
  this.paddleLeft.move();
  this.paddleRight.move();
  this.paddleLeft.render ();
  this.paddleRight.render ();
  this.ball.render();

};


app.Game.prototype.gameOver = function () {
  window.clearInterval(this.intervalId);
  if (confirm("GAME OVER! \n Do you want to play again?")){
  }
};


app.Game.prototype.prepareDOM = function () {


  this.canvas = document.createElement('canvas');
  this.canvas.id     = "canvas";
  this.canvas.width  = this.width;
  this.canvas.height = this.height;
  this.canvas.style = "border:1px solid #000000;";
  window.document.body.appendChild(this.canvas);


  this.canvasContext = this.canvas.getContext('2d');
};


app.Game.prototype.listeners = function () {
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 87) {
      this.paddleLeft.directionTop = true;
    }else if (event.keyCode == 83){
      this.paddleLeft.directionBottom = true;
    }else if (event.keyCode == 81){
      this.ball.changeLeftY = true;
    }else if (event.keyCode == 80) {
      this.paddleRight.directionTop = true;
    }else if (event.keyCode == 76){
      this.paddleRight.directionBottom = true;
    }else if (event.keyCode == 186){
      this.ball.changeRightY = true;
    }
  }.bind(this));

  document.addEventListener('keyup', function(event) {
    if (event.keyCode == 87) {
      this.paddleLeft.directionTop = false;
    }else if (event.keyCode == 83){
      this.paddleLeft.directionBottom = false;
    }else if (event.keyCode == 81){
      this.ball.changeLeftY = false;
    }else if (event.keyCode == 80) {
      this.paddleRight.directionTop = false;
    }else if (event.keyCode == 76){
      this.paddleRight.directionBottom = false;
    }else if (event.keyCode == 186){
      this.ball.changeRightY = false;
    }
  }.bind(this));
};


app.Game.prototype.createPlayers = function () {

  let firstPlayer = prompt ("Please, write the name of the first player. \n You'll play on the left with the keys 'W' and 'S' to move the paddle and 'Q' to change ball direction");
  let secondPlayer = prompt ("Please, write the name of the second player. \n You'll play on the right with the keys 'P' and 'L' and '`' to change ball direction");
  let scoreMaximum = parseInt(prompt ("Please, write the Maximum number of scores to win the game"));



  firstPlayer = (firstPlayer === '') ? "Player 1" : firstPlayer;
  secondPlayer = (secondPlayer === '') ? "Player 2" : secondPlayer;
  if (Number.isInteger(scoreMaximum) === false || scoreMaximum <= 0){
    this.maxScore = 1;
  }else{
    this.maxScore = scoreMaximum;
  }

  this.players.push(new app.Player(firstPlayer, [this.width / 2 - 100,30], this.canvasContext));
  this.players.push(new app.Player(secondPlayer, [this.width / 2 + 50,30], this.canvasContext));

}


app.Game.prototype.scoreMessages = function () {

  let actualDate = new Date().getTime();

  for (let i = 0; i < this.players.length; i++) {
    if (this.players[i].scoreTime + 2000 >= actualDate && this.players[i].scoreTime != 0){
      this.players[i].scoreMsg();
      if (this.players[i].strikeCounter === 3){
        this.players[i].strikeMsg("Good Job!");
      }else if (this.players[i].strikeCounter === 5){
        this.players[i].strikeMsg("Awesome!");
      }else if (this.players[i].strikeCounter === 7){
      this.players[i].strikeMsg("OMG!");
      }else if (this.players[i].strikeCounter === 10){
        this.players[i].strikeMsg("God like!");
      }
    }
  }

}
