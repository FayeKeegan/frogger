(function (){ 
	var Frogger = window.Frogger = window.Frogger || {};

	var Log = Frogger.Log = function(options){
	  Frogger.FloatingObject.call(this, options);
		this.color = Log.COLOR;
		this.dim_x = Log.DIM_X;
	  this.vel = Log.VEL;
	  this.padding = Log.PADDING;
	};

	Frogger.Util.inherits(Frogger.Log, Frogger.FloatingObject);

	Log.COLOR = "#975121";
	Log.DIM_X = 100;
	Log.VEL = [1,0];
	Log.PADDING = 2;

	Log.prototype.draw = function(ctx){
		var x = this.pos[0] + this.padding;
		var y = this.pos[1] + this.padding;
		var x_length = this.dim_x - this.padding*2;
		var y_length = this.dim_y - this.padding*2;
		ctx.clearRect(x, y, x_length, y_length);
	  ctx.fillStyle = this.color;
	  ctx.fillRect(x, y, x_length, y_length);
	};

})();
