(function () {
  
  if (typeof SnakeGame === "undefined") {
    window.SnakeGame = {};
  }
 var Snake = SnakeGame.Snake = function Snake(board) {
    this.score = 0
    this.dir = "N";
    this.segments = [[12, 12], [11, 12], [10, 12]];
    this.board = board;
    this.head = this.segments[this.segments.length - 1]; //head is represented as last (leading) piece in segments of the snake.
  };
  
  Snake.prototype.move = function() {
    //Make a copy of current head to increment into new head.
    this.head = [this.segments[this.segments.length - 1][0], this.segments[this.segments.length - 1][1]]; 

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
    this.checkIfLose(this.head);
    this.segments.push(this.head); 
    if (!this.eatApple()) { //Eats apple if head of snake just reached an apple.
      this.segments = this.segments.slice(1); //If no apple eaten, keep snake same size, skip this line to make the snake grow
    } 
  };
  
  Snake.prototype.checkIfLose = function(newHead) {
    // debugger
    for (var i = 0; i < this.segments.length; i++) {
      if (this.segments[i][0] === newHead[0] && this.segments[i][1] === newHead[1]) {
        this.segments = [];
        // alert("Game Over.");
      }
    }
    
    if ((newHead[0] >= 25 || newHead[0] < 0) || (newHead[1] >= 25 || newHead[1] < 0) ) {
      this.segments = [];
      // alert("Game Over, you crossed the border");
    }
  };
  
  Snake.prototype.eatApple = function() {
    if (this.head[0] == this.board.apple[0] && this.head[1] == this.board.apple[1]) {
      this.board.replaceApple();
      this.score += 1
      $("#score").html(this.score)
      return true;
    } else {
      return false;
    }
  };
  
  Snake.prototype.turn = function(input) {
    if (this.isOppositeDir(input) === true) {
      return;
    }
 //stop movement of screen with arrow keys
    switch (input) {
    case 38:  // for up arrow
    case 87:  // for "w"
      event.preventDefault();
      this.dir = "N"; // North
      break;
    case 39:  //for right arrow
    case 68:  // or "D"
      event.preventDefault();
      this.dir = "E"; // East 
      break;
    case 40:  // for down arrow
    case 83:  // or "S"
      event.preventDefault();
      this.dir = "S"; // South
      break;
    case 37:  // for left arrow
    case 65:  // for "A"
      event.preventDefault();
      this.dir = "W"; // West
      break;
    }
  };
  
  Snake.prototype.isOppositeDir = function (keyInput){
    if (this.dir === "N" && (keyInput === 40 || keyInput === 83) ) {
      return true;
    }
    if (this.dir === "E" && (keyInput === 37 || keyInput === 65) ) {
      return true;
    }    
    if (this.dir === "S" && (keyInput === 38 || keyInput === 87) ) {
      return true;
    }
    if (this.dir === "W" && (keyInput === 39 || keyInput === 68) ) {
      return true;
    }
    return false;
  };
  
  
})();