(function(){
  var Frogger = window.Frogger = window.Frogger || {};
  var key = window.key = window.key || {};

  var View = Frogger.View = function(Game, ctx) {
    this.game = Game;
    this.ctx = ctx;
  };

  View.prototype.start = function () {
    var that = this;
    this.bindKeyHandlers();
    var gameInterval = setInterval(function(){
      that.game.step();
      that.game.draw(that.ctx);
      if (that.game.won){
        $("#game-canvas").removeClass("revealed").addClass("hidden");
        clearInterval(gameInterval);
        $(".game-won-message").removeClass("hidden").addClass("revealed");
      } else if (that.game.lost){
        $("#game-canvas").removeClass("revealed").addClass("hidden");
        clearInterval(gameInterval);
        $(".game-over-message").removeClass("hidden").addClass("revealed");
      }
    }, 60);
  };


  View.prototype.bindKeyHandlers = function () {
    var game = this.game;
    key("up", function(e) {
      e.preventDefault();
      game.frog.leap([0, -1])
    });
    key("down", function(e) {
      e.preventDefault();
      game.frog.leap([0, 1])
    });
    key("left", function(e) {
      e.preventDefault();
      game.frog.leap([-1, 0])
    });
    key("right", function(e) {
      e.preventDefault();
      game.frog.leap([1, 0])
    });
  };

})();