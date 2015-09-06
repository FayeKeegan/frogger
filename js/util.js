(function(){
  var Frogger = window.Frogger = window.Frogger || {};

  var Util = Frogger.Util = {};

  Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate () {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

})();
