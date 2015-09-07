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
    setInterval(function(){
      that.game.step();
      that.game.draw(that.ctx);
    }, 60);
  };

  View.prototype.bindKeyHandlers = function () {
    var game = this.game;
    key("up", function() {
      game.frog.leap([0, -1])
    });
    key("down", function() {
      game.frog.leap([0, 1])
    });
    key("left", function() {
      game.frog.leap([-1, 0])
    });
    key("right", function() {
      game.frog.leap([1, 0])
    });
  };

})();