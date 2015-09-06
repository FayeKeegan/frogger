(function (){ 

var Frogger = window.Frogger = window.Frogger || {};

var FloatingObject = Frogger.FloatingObject = function(options){
  this.y_pos = options.pos;
  this.vel = options.vel;
  this.dim_x = options.dim_x;
  this.dim_y = 50;
  this.game = options.game;
};

FloatingObject.prototype.draw = function(ctx){
  ctx.fillStyle = this.color;
  ctx.fillRect (0, 0, this.dim_x, this.dim_y);
};

FloatingObject.prototype.move = function() {
  this.y_pos += 1;
};


})();
