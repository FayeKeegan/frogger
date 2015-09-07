(function(){
  var Frogger = window.Frogger = window.Frogger || {};

  var Frog = Frogger.Frog = function(game){
    this.game = game;
    this.radius = Frog.RADIUS;
    this.pos = [game.dim_y + 17.5, 0]
    this.color = Frog.COLOR;
    this.vel = [0,0];
  };

  Frog.COLOR = "#008B45";
  Frog.RADIUS = 15;

  Frog.prototype.leap = function(direction){
    this.pos[0] += direction[0];
    this.pos[1] += direction[1];
  };

  MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect (0, 0, this.dim_x, this.dim_y);
  };

})();
