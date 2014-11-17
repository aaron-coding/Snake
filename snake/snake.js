(function () {
  
  if (typeof SnakeGame === "undefined") {
    window.SnakeGame = {};
  }
 var Snake = SnakeGame.Snake = function Snake(board){
    this.dir = "N"
    this.segments = [[12, 12], [11, 12], [10, 12]];
    this.board = board;
    this.head = this.segments[this.segments.length - 1]; //head is represented as last (leading) piece in segments of the snake.
  };
  
  Snake.prototype.move = function() {
    //Make a copy of current head to increment into new head.
    this.head = [this.segments[this.segments.length - 1][0], this.segments[this.segments.length - 1][1]] 

    switch (this.dir) {
    case "N":
      this.head[0] -= 1;
      break;
    case "E":
      this.head[1] += 1;
      break;
    case "S":
      this.head[0] += 1;
      break;
    case "W":
      this.head[1] -= 1;
      break;
    }
    this.segments.push(this.head); 
    if (!this.eatApple()) { //Eats apple if head of snake just reached an apple.
      this.segments = this.segments.slice(1) //If no apple eaten, keep snake same size
    } 
  };
  
  Snake.prototype.eatApple = function(){
    if (this.head[0] == this.board.apple[0] && this.head[1] == this.board.apple[1]) {
      this.board.replaceApple();
      return true;
    } else {
      return false;
    }
  };
  
  Snake.prototype.turn = function(input) {
    if (this.isOppositeDir(input) === true) {
      return;
    }
    switch (input) {
    case 38:  // for up arrow
    case 87:  // for "w"
      this.dir = "N" // North
      break;
    case 39:  //for right arrow
    case 68:  // or "D"
      this.dir = "E" // East 
      break;
    case 40:  // for down arrow
    case 83:  // or "S"
      this.dir = "S" // South
      break;
    case 37:  // for left arrow
    case 65:  // for "A"
      this.dir = "W" // West
      break;
    }
  };
  
  Snake.prototype.isOppositeDir = function (keyInput){
    if (this.dir === "N" && (keyInput === 40 || keyInput === 83) ) {
      return true
    }
    if (this.dir === "E" && (keyInput === 37 || keyInput === 65) ) {
      return true
    }    
    if (this.dir === "S" && (keyInput === 38 || keyInput === 87) ) {
      return true
    }
    if (this.dir === "W" && (keyInput === 39 || keyInput === 68) ) {
      return true
    }
    return false
  }
  
  
})();