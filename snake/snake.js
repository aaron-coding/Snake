(function () {
  
  if (typeof SnakeGame === "undefined") {
    window.SnakeGame = {};
  }
  
  var Coord = SnakeGame.Coord = function Coord(row, col){
    this.row = row
    this.col = col
  };

  Coord.prototype.plus = function(){
    // this.row
//     this.col
  }
  
 var Snake = SnakeGame.Snake = function Snake(){
    this.DIRS = ["N", "E", "S", "W"];
    this.dir = "N"
    this.segments = [[1, 0], [1, 1], [1, 2]];
    
  };
  
  Snake.prototype.move = function() {
    var resultSeg = [this.segments[this.segments.length - 1][0], this.segments[this.segments.length - 1][1]] 
    this.segments = this.segments.slice(1)
    switch (this.dir) {
    case "N":
      resultSeg[0] -= 1;
      break;
    case "E":
      resultSeg[1] += 1;
      break;
    case "S":
      resultSeg[0] += 1;
      break;
    case "W":
      resultSeg[1] -= 1;
      break;
    }
    
    this.segments.push(resultSeg);
  };
  
  Snake.prototype.turn = function(input) {
    debugger
    switch (String.fromCharCode(input)) {
    case "W":
      this.dir = "N"
      break;
    case "D":
      this.dir = "E"
      break;
    case "S":
      this.dir = this.DIRS[2]
      break;
    case "A":
      this.dir = this.DIRS[3]
      break;
    }
  };
  
  
})();