'use strict';


app.Ball = function (radius, position, context) {
  this.radius = radius;
  this.position = position;
  this.context = context;
  //Direction defines if we need to increment or decrement the move
  this.direction = [1,1];

  //Check the position values are an array, to avoid confusion
  if (position.constructor !== Array || position.length != 2){
    console.log('Declaring the ball, position must be an array');
  }
}

app.Ball.prototype.render = function () {
  this.context.beginPath();
  this.context.arc(this.position[0], this.position[1], this.radius, 0,2*Math.PI);
  this.context.fillStyle = 'red';
  this.context.fill();
};


app.Ball.prototype.move = function (paddle, blocks) {
  //debugger;
  let xPositionRadius = this.position[0] + this.radius * this.direction[0];
  let yPositionRadius = this.position[1] + this.radius* this.direction[1];
  let blocksToRemove = [];

  //Check the paddle position for the collision
  if (this.position[1] == paddle.position[1] - paddle.height/2 &&
      this.position[0] >= paddle.position[0] &&
      this.position[0] <= paddle.position[0] + paddle.width){
      this.direction[1] = -1;
  }

  //CHeck the blocks collision
  //First we will calculate the blockFrame position, this way we will be able
  //only run the for if the ball is in the block frame
  let blockX = [0, this.context.canvas.clientWidth];
  let blockY = [0, blocks[0].height * 4 + 30  ];

  if (xPositionRadius >= blockX[0] && xPositionRadius <= blockX[1] &&
      yPositionRadius > blockY[0] && yPositionRadius < blockY[1]){
    //The ball arrived to the block frame, let's check where's the ball
    //and calculate the collision

    for (let i = 0; i < blocks.length; i++){
      let isInXRange = false;
      let isInYRange = false;
      let isInX = false;
      let isInY = false;
      if (xPositionRadius > blocks[i].position[0] && xPositionRadius < blocks[i].position[0] + blocks[i].width)  isInXRange = true;
      if (yPositionRadius > blocks[i].position[1] && yPositionRadius < blocks[i].position[1] + blocks[i].height)  isInYRange = true;
      if (xPositionRadius === blocks[i].position[0] || xPositionRadius === blocks[i].position[0] + blocks[i].width) isInX = true;
      if (yPositionRadius === blocks[i].position[1] || yPositionRadius === blocks[i].position[1] + blocks[i].height) isInY = true;
      if (isInXRange && isInY){
        this.direction[1] *= -1;
        blocksToRemove.push(i);
      }else if (isInYRange && isInX){
        this.direction[0] *= -1;
        blocksToRemove.push(i);
      }
    }
  }

  //Remove the blocks
  if (blocksToRemove.length > 0){
    for (let i = 0; i < blocksToRemove.length; i++) {
      blocks.splice(blocksToRemove[i], 1);
    }
  }

  //We use the position in order to know the direction of the ball
  if (yPositionRadius === 0 || yPositionRadius === this.context.canvas.clientHeight) this.direction[1] *= -1;
  if (xPositionRadius === 0 || xPositionRadius === this.context.canvas.clientWidth) this.direction[0] *= -1;

  //Move the ball
  this.position[0] += this.direction[0];
  this.position[1] += this.direction[1];
};
