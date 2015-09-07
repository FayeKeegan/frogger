(function (){ 

  var Frogger = window.Frogger = window.Frogger || {};

  var FloatingObject = Frogger.FloatingObject = function(options){
    Frogger.MovingObject.call(this, options);
  };

  Frogger.Util.inherits(Frogger.FloatingObject, Frogger.MovingObject);

})();
