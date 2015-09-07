(function (){ 

  var Frogger = window.Frogger = window.Frogger || {};

  var MovingObject = Frogger.MovingObject = function(options){
    this.game = options.game;
    this.pos = options.pos;
    this.vel = options.vel;
    this.dim_x = options.dim_x;
    this.dim_y = this.game.lane_y;
  };

  MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect (0, 0, this.dim_x, this.dim_y);
  };

  MovingObject.prototype.move = function(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  };

})();
