(function (){ 
	var Frogger = window.Frogger = window.Frogger || {};

	var BigLog = Frogger.BigLog = function(options){
	  Frogger.Log.call(this, options);
		this.dim_x = BigLog.DIM_X;
	  this.vel = BigLog.VEL;
	};

	Frogger.Util.inherits(Frogger.BigLog, Frogger.Log);

	BigLog.COLOR = "#9C661F";
	BigLog.DIM_X = 150;
	BigLog.VEL = [5,0];
	
})();
