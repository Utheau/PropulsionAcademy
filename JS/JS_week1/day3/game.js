'use strict';


app.Game = function (widthCanvas, heightCanvas) {
  // Prepare Parameters
  this.width = widthCanvas;
  this.height = heightCanvas;
  this.blocks = [];
  this.blockNum = 23;
  this.intervalId = 0;

  // Prepare DOM
  this.prepareDOM();

  //Prepare objects
  this.board = new app.Board(this.canvasContext);
  this.ball = new app.Ball(5, [100,350], this.canvasContext);
  this.paddle = new app.Paddle(this.canvasContext);

  //Control the events
  this.listeners();
}


app.Game.prototype.play = function () {
  //Create initial board
  this.board.render();
  //Create initial ball
  this.ball.render();
  //Create initial paddle
  this.paddle.render();
  //Create wrapper of blocks
  this.blockWrapper(this.blockNum);
  //Mass render
  this.blocks.forEach(function (element) {
    element.render();
  });
  //Move the ball
  this.intervalId = setInterval(this.resetCanvas.bind(this), 10);
};


app.Game.prototype.blockWrapper = function (num) {
  this.maxWrapperWidth = this.canvasContext.canvas.clientWidth - 30;
  this.blockWidth = 40;
  this.blockHeight = 15;
  this.blockPosition = [0, 30];
  this.hBorder = 5;
  this.vBorder = 5;

  for (let i = 0; i <= num; i++) {
    if (this.blockPosition[0] + this.blockWidth >= this.maxWrapperWidth){
      this.blockPosition[0] = 30;
      this.blockPosition[1] += this.blockHeight + this.hBorder;
    }else if (i == 0){
      this.blockPosition[0] = 30;
    }else{
      this.blockPosition[0] += this.blockWidth + this.vBorder;
    }

    //Push in the array the blocks already created
    this.blocks.push(new app.Block(this.blockPosition.slice(0), this.blockWidth, this.blockHeight, this.canvasContext));
  }
};


app.Game.prototype.resetCanvas = function () {
  // Game Over!
  if (this.ball.position[1] + this.ball.radius === this.canvasContext.canvas.clientHeight){
    this.gameOver();
  }
  // Render all
  this.ball.move(this.paddle, this.blocks);
  this.paddle.move();
  this.board.render (this.canvasContext);
  this.paddle.render (this.canvasContext);
  this.ball.render(this.canvasContext);
  this.blocks.forEach(function (element) {
    element.render();
  });
};


app.Game.prototype.gameOver = function () {
  window.clearInterval(this.intervalId);
  if (confirm("GAME OVER! \n Do you want to play again?")){
  }
};


app.Game.prototype.prepareDOM = function () {
  //Create the wrapper
  let wrapper = document.createElement("div");
  wrapper.id = "wrapper"
  window.document.body.appendChild(wrapper);

  //create the player
  let player = document.createElement("div");
  player.className = "player"
  player.innerHTML = "Player: ";
  window.document.getElementById('wrapper').appendChild(player);

  //create the score
  let score = document.createElement("div");
  score.className = "score"
  score.innerHTML = "Score: ";
  window.document.getElementById('wrapper').appendChild(score);

  //create the canvas
  this.canvas = document.createElement('canvas');
  this.canvas.id     = "canvas";
  this.canvas.width  = this.width;
  this.canvas.height = this.height;
  window.document.getElementById('wrapper').appendChild(this.canvas);

  //Get canvas
  this.canvasContext = this.canvas.getContext('2d');
};


app.Game.prototype.listeners = function () {
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
      this.paddle.directionLeft = true;
    }else if (event.keyCode == 39){
      this.paddle.directionRight = true;
    }
  }.bind(this));

  document.addEventListener('keyup', function(event) {
    if (event.keyCode == 37) {
      this.paddle.directionLeft = false;
    }else if (event.keyCode == 39){
      this.paddle.directionRight = false;
    }
  }.bind(this));
}
