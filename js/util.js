(function(){
  var Frogger = window.Frogger = window.Frogger || {};

  var Util = Frogger.Util = {};

  Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate () {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Util.randomVec = function(length){
    var xNeg = 0;
    if (Math.round(Math.random()*2) === 0){
      xNeg = -1;
    } else { xNeg = 1; }
    var yNeg = 0;
    if (Math.round(Math.random()*2) === 0){
      yNeg = -1;
    } else { yNeg = 1; }

    var x = Math.floor(Math.random() * length) * xNeg;
    var y = Math.sqrt(Math.pow(length, 2)+ Math.pow(x, 2))* yNeg;

    return [x, y];
  };

})();
