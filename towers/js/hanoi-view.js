(function () {
  if (typeof Hanoi === "undefined") {
    window.Hanoi = {};
  }
  
  var View = Hanoi.View = function (game, $el){
    this.$el = $el;
    this.game = game
    this.render();
    this.bindEvents();
    this.disks = [];
  }

View.prototype.render = function(){
  var megaString = " ";
  
  for (var i = 0; i < this.game.towers.length; i++) { 
      megaString += "<div id='" + i + "' class='stack'>"
      for (var j = 0; j < this.game.towers[i].length; j++) {
        megaString += "<div id='s" + this.game.towers[i][j] + "'></div>";
      }
      megaString += "</div>";
  }  
  this.$el.html(megaString);
  // this.$el.css();
};

View.prototype.bindEvents = function () {
  this.$el.on("click", ".stack", this.clickTower.bind(this) )
}

View.prototype.clickTower = function ($event) {
  if (this.fromTower) {  
      if (this.game.move(this.fromTower, $event.currentTarget.id)) {

        this.render();
      } else {
        alert("invalid move!")
      }
      this.fromTower = undefined;
      
  } else {
    this.fromTower = $event.currentTarget.id;
  }
  
};

})();