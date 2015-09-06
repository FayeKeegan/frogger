(function (){ 
	var Frogger = window.Frogger = window.Frogger || {};

	var Log = Frogger.Log = function(options){
	  Frogger.FloatingObject.call(this, options);
		this.color = Log.COLOR;
		this.dim_x = Log.DIM_X;
	  this.vel = Log.VEL;
	};

	Frogger.Util.inherits(Frogger.Log, Frogger.FloatingObject);

	Log.COLOR = "#9C661F";
	Log.DIM_X = 100;
	Log.VEL = [1,0]


	Log.prototype.draw = function(ctx){
		ctx.clearRect(this.pos[0], this.pos[1], this.dim_x, this.dim_y);
	  ctx.fillStyle = this.color;
	  ctx.fillRect(this.pos[0], this.pos[1], this.dim_x, this.dim_y);
	};

})();
