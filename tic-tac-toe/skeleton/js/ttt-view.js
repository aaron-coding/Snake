(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
    var htmlToAdd = this.setupBoard();
    this.$el = $el
    $el.html(htmlToAdd);
    this.bindEvents();
    this.game = game;
  };

  View.prototype.bindEvents = function () {
    var $grid = this.$el.find("#grid");
    $grid.on('click', ".cell", this.makeMove.bind(this) )
  };

  View.prototype.makeMove = function ($squareEvent) {
    var $square = $($squareEvent.currentTarget);
    var pos = $squareEvent.target.id.split(",");
    var currentMark = this.game.currentPlayer
    var currentColor = ""
    if (currentMark === "x"){
      currentColor = "red"
    } else {
      currentColor = "blue"
    };
    
    try {
        this.game.playMove(pos);
        $square.css("color", currentColor);
        $square.html(currentMark);
        
    }
    catch(err) {
        alert("invalid move");
    };
    
    if (this.game.isOver()) {
      var winner = this.game.winner();
      if (winner) {
        alert("Congrats " + winner + " you are the winner!")
      } else {
        alert("It's a draw!")
      }
      $el.html(this.setupBoard());
      this.bindEvents();
      this.game = new TTT.Game();
    }
    
    // console.log(this.game.board.print()) 
 
  };

  View.prototype.setupBoard = function () {
    var grid = "<div id='grid'>"
    // var row = "<div class='row'><div class='cell'>X</div><div class='cell'>X</div><div class='cell'>X</div></div>"
    for (var i = 0; i < 3; i++) {
      grid += "<div class='row'>"
      for (var j = 0; j < 3; j++) {
        grid += "<div class='cell' id =" + i + "," + j + "></div>";
      }
      grid += "</div>";
    }
    grid += "</div>"
    return $(grid);
  };
})();
