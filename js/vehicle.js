(function (){ 

  var Frogger = window.Frogger = window.Frogger || {};

  var Vehicle = Frogger.Vehicle = function(options){
    Frogger.MovingObject.call(this, options);
  };

  Frogger.Util.inherits(Frogger.Vehicle, Frogger.MovingObject);

})();