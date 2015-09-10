(function (){ 
	var Frogger = window.Frogger = window.Frogger || {};

	var Message = Frogger.Message = function(options){
		this.game = options.game;
		this.alertType = options.alertType;
		this.message = options.message;
	};

	Message.prototype.draw = function(ctx){
		ctx.font = "25px sans-serif";
		ctx.fillStyle = (this.alertType === "good" ? "white" : "#black");
		ctx.textAlign = "center";
		ctx.fillText(this.message, this.game.dim_x / 2, this.game.dim_y/2); 
	};

})();
