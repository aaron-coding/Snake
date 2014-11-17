(function () {
  if (typeof SnakeGame === "undefined") {
    window.SnakeGame = {};
  }
  
  var SnakeView = SnakeGame.SnakeView = function($el){
    this.$el = $el;
    this.board = new SnakeGame.Board($el);
    this.bindEvents();
    this.intervalID = window.setInterval(this.step.bind(this), 150);
    
  };
  
  SnakeView.prototype.bindEvents = function(){
    $("body").on("keydown", this.handleKeyEvent.bind(this));
  };
  
 
  SnakeView.prototype.handleKeyEvent = function ($event) {
    this.board.snake.turn($event.keyCode)
  };
  
  SnakeView.prototype.step = function () {
    this.board.snake.move();
    this.board.render();
    if (this.board.snake.segments.length < 1) {
      alert("Game Over.")
      window.clearInterval(this.intervalID); 
    }
  };
  
})();