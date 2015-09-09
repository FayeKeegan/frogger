(function (){ 
	var Frogger = window.Frogger = window.Frogger || {};

	var Lilypad = Frogger.Lilypad = function(options){
		this.scored = false;
		this.pos = options.pos;
		this.game = options.game;
		this.dim_x = this.game.dim_x / 10;
		this.dim_y = this.game.lane_y;
		this.pad_x = this.pos[0] + (this.dim_x / 2);
		this.pad_y = this.pos[1] + (this.dim_y / 2);
		this.radius = this.dim_y / 2 - 1;

		this.vel = [0,0]
	};

	Lilypad.prototype.drawWater = function(ctx){
		var x = this.pos[0];
		var y = this.pos[1];
		var x_length = this.dim_x;
		var y_length = this.dim_y;
		ctx.clearRect(x, y, x_length, y_length);
	  ctx.fillStyle = "#63B8FF";
	  ctx.fillRect(x, y, x_length, y_length);
	}

	Lilypad.prototype.drawPad = function(ctx){
	  var path = new Path2D();
	  var endAngle = Math.PI;
	  ctx.beginPath();
    ctx.arc(this.pad_x,this.pad_y,this.radius,Math.PI/7,-Math.PI/7,false);
    ctx.lineTo(this.pad_x,this.pad_y);
    ctx.fillStyle = this.scored ? "pink" : "#008B45";
    ctx.fill();
	}

	Lilypad.prototype.draw = function(ctx){
		this.drawWater(ctx);
		this.drawPad(ctx);
	};



})();
