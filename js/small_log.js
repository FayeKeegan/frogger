(function (){ 
	var Frogger = window.Frogger = window.Frogger || {};

	var SmallLog = Frogger.SmallLog = function(options){
	  Frogger.Log.call(this, options);
		this.dim_x = SmallLog.DIM_X;
	  this.vel = SmallLog.VEL;
	};

	Frogger.Util.inherits(Frogger.SmallLog, Frogger.Log);

	SmallLog.COLOR = "#9C661F";
	SmallLog.DIM_X = 75;
	SmallLog.VEL = [-10,0]

})();
