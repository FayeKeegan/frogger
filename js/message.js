(function (){ 
	var Frogger = window.Frogger = window.Frogger || {};

	var Message = Frogger.Message = function(options){
		this.game = options.game;
		this.text = options.text;
	};

	Message.prototype.draw = function(ctx){
		ctx.font = "30px Comic Sans MS";
		ctx.fillStyle = "red";
		ctx.textAlign = "center";
		ctx.fillText("Hello World", this.game.dim_x / 2, this.game.dim_y/2); 
	};

})();
