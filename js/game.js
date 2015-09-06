(function(){
  var Frogger = window.Frogger = window.Frogger || {};

  var Game = Frogger.Game = function(dim_y, dim_x) {
    this.dim_y = dim_y;
    this.dim_x = dim_x;
    this.floatingObjects = [];
    this.addFloatingObjects();
  };

  Game.prototype.draw = function (ctx) {
    ctx.fillStyle = "#63B8FF";
    ctx.fillRect (0, 0, this.dim_x, this.dim_y / 2);
    ctx.fillStyle = "#D6D6D6";
    ctx.fillRect (0, this.dim_y / 2, this.dim_x, this.dim_y / 2);
    this.floatingObjects.forEach( function(floatingObject){
      floatingObject.draw(ctx);
    });
  };


  Game.prototype.step = function(){
    this.moveObjects();
  };

  Game.prototype.moveObjects = function () {
    this.floatingObjects.forEach( function(floatingObject){
      floatingObject.move();
      console.log(floatingObject.pos[0]);
      console.log(this.dim_x);
        if (floatingObject.pos[0] > this.dim_x){
          this.wrap(floatingObject);
        }
      }.bind(this));
  };

  Game.prototype.wrap = function(floatingObject){
    debugger
    var x = 0 - floatingObject.dim_x;
    var y = floatingObject.pos[1];
    floatingObject.pos = [x,y];
 };

  Game.prototype.addFloatingObjects = function(){
    var log = new Frogger.Log({
      pos: [0,20],
      game: this
    })
    this.floatingObjects.push(log);
  };


})();