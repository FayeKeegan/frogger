(function (){ 
	var Frogger = window.Frogger = window.Frogger || {};

	var Lilypad = Frogger.Lilypad = function(options){
		this.pos = options.pos;
		this.game = options.game;
		this.dim_x = this.game.dim_x / 10;
		this.dim_y = this.game.lane_y;
	};

	Lilypad.PAD_COLOR = "#63B8FF";
	Lilypad.WATER_COLOR = "#63B8FF";

	Lilypad.prototype.draw = function(ctx){
		var x = this.pos[0];
		var y = this.pos[1];
		var x_length = this.dim_x;
		var y_length = this.dim_y;
		ctx.clearRect(x, y, x_length, y_length);
	  ctx.fillStyle = "#63B8FF";
	  ctx.fillRect(x, y, x_length, y_length);

	  // var path = new Path2D();
	  // var pad_x = this.pos[0] + this.dim_x / 2;
	  // var pad_y = this.pos[1] + this.dim_y / 2;
	  // var pad_radius = this.dim_x / 2 - 1;
	  // var endAngle = Math.PI;
	  // path.arc(pad_x, pad_y, pad_radius,0, endAngle, true);
	  // ctx.fill(path);
	  // ctx.fillStyle = this.PAD_COLOR;
	};



})();
