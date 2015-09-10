(function (){ 
	var Frogger = window.Frogger = window.Frogger || {};

	var Car = Frogger.Car = function(options){
	  Frogger.FloatingObject.call(this, options);
		this.color = Car.COLOR;
		this.dim_x = Car.DIM_X;
	  this.vel = Car.VEL;
	  this.padding = Car.PADDING;
	};

	Frogger.Util.inherits(Frogger.Car, Frogger.FloatingObject);

	Car.COLOR = "#FF6A6A";
	Car.DIM_X = 40;
	Car.VEL = [10,0];
	Car.PADDING = 2;


	Car.prototype.draw = function(ctx){
		var x = this.pos[0] + this.padding;
		var y = this.pos[1] + this.padding;
		var x_length = this.dim_x - this.padding*2;
		var y_length = this.dim_y - this.padding*2;
		ctx.clearRect(x, y, x_length, y_length);
	  ctx.fillStyle = this.color;
	  ctx.fillRect(x, y, x_length, y_length);
	  this.drawWheel(ctx, this.pos[0] + this.dim_x / 5, this.pos[1])
	  this.drawWheel(ctx, this.pos[0] + this.dim_x * 3/5, this.pos[1])
	  this.drawWheel(ctx, this.pos[0] + this.dim_x / 5, this.pos[1] + this.dim_y - this.padding)
	  this.drawWheel(ctx, this.pos[0] + this.dim_x * 3/5, this.pos[1] + this.dim_y - this.padding)
	};

	Car.prototype.drawWheel = function(ctx, x, y){
		ctx.clearRect(x, y, this.dim_x / 3, this.padding);
		ctx.fillStyle = "black";
		ctx.fillRect(x, y, this.dim_x / 3, this.padding);
	}

})();
