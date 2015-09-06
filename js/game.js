(function(){
  var Frogger = window.Frogger = window.Frogger || {};

  var Game = Frogger.Game = function(dim_y, dim_x) {
    this.dim_y = dim_y;
    this.dim_x = dim_x;
    this.floatingObjects = [];
    this.addFloatingObjects()
  };


  Game.prototype.draw = function (ctx) {
    var that = this;
    ctx.fillStyle = "#63B8FF";
    ctx.fillRect (0, 0, this.dim_x, this.dim_y / 2);
    ctx.fillStyle = "#D6D6D6";
    ctx.fillRect (0, this.dim_y / 2, this.dim_x, this.dim_y / 2);
  };

  Game.prototype.step = function(){
    
  };

  Game.prototype.addFloatingObjects = function(){
    
  };


})();
