(function(){
  var Frogger = window.Frogger = window.Frogger || {};

  var Frog = Frogger.Frog = function(options){
    Frogger.MovingObject.call(this, options);
    this.vel = Frog.VEL;
    this.game = options.game;
    this.radius = Frog.RADIUS;
    this.pos = [this.game.dim_x / 2, this.game.dim_y - 15]
    this.color = Frog.COLOR;
  };

  Frog.COLOR = "#008B45";
  Frog.RADIUS = 10;
  Frog.VEL = [0,0];

  Frogger.Util.inherits(Frogger.Frog, Frogger.MovingObject);

  Frog.prototype.leap = function(direction){
    this.pos[0] += direction[0] * this.game.lane_y;
    this.pos[1] += direction[1] * this.game.lane_y;
  };

  Frog.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill();
  };

})();
