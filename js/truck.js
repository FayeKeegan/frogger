(function (){ 
	var Frogger = window.Frogger = window.Frogger || {};

	var Truck = Frogger.Truck = function(options){
	  Frogger.FloatingObject.call(this, options);
		this.color = Truck.COLOR;
		this.dim_x = Truck.DIM_X;
	  this.vel = Truck.VEL;
	  this.padding = Truck.PADDING;
	};

	Frogger.Util.inherits(Frogger.Truck, Frogger.FloatingObject);

	Truck.COLOR = "#FFF68F";
	Truck.DIM_X = 80;
	Truck.VEL = [-3,0];
	Truck.PADDING = 2;

	Truck.prototype.draw = function(ctx){
		var x = this.pos[0] + this.padding;
		var y = this.pos[1] + this.padding;
		var x_length = this.dim_x - this.padding*2;
		var y_length = this.dim_y - this.padding*2;
		ctx.clearRect(x, y, x_length, y_length);
	  ctx.fillStyle = this.color;
	  ctx.fillRect(x, y, x_length, y_length);
	};


})();
