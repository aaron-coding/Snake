(function () {
  if (typeof SnakeGame === "undefined") {
    window.SnakeGame = {};
  }
  
  var Board = SnakeGame.Board = function Board($el){
    this.$el = $el
    this.snake = new SnakeGame.Snake();
    this.apple = [Math.floor(Math.random() * 25), Math.floor(Math.random() * 25)]
    this.render();
    this.bindEvents();
   };
   
   Board.prototype.render = function(){
     var $megaString = "";
     for (var i = 0; i < 25; i++) {
         $megaString += "<div class='row'>";           
             for (var j = 0; j < 25; j++) {
                 if (this.apple[0] === i && this.apple[1] === j) {
                     $megaString += "<div class='apple' data-pos='" + i + "," + j + "'>A</div>";           
                 } else {
                     $megaString += "<div class='cell' data-pos='" + i + "," + j + "'>.</div>";        
                 }
             }
         $megaString += "</div>";
     }

     $megaString = $($megaString);
     for (var i = 0; i < this.snake.segments.length; i++) {
       var $snakeToBe = $megaString.find("[data-pos='" + this.snake.segments[i][0] + "," + this.snake.segments[i][1] + "']");
       $snakeToBe.html("S")
       } 
     $el.html($megaString);
   }
  
   Board.prototype.bindEvents = function () {
     $( "body" ).keydown(this.handleKeyEvent.bind(this));
   };
  
   Board.prototype.handleKeyEvent = function ($event) {
     this.snake.turn($event.keyCode)
   };
})();