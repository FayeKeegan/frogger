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
        if (!this.onCanvas(floatingObject)){
          floatingObject.wrap(this.dim_x)
        }
      }.bind(this));
  };

  Game.prototype.onCanvas = function(object){
    var left = object.pos[0];
    var right = object.pos[0] + object.dim_x;
    if ((left < 0 && right < 0)|| left > this.dim_x + 1){
      return false
    } else {
      return true
    }
  };

  Game.prototype.addFloatingObjects = function(){
    var bigLog = new Frogger.BigLog({
      pos: [0,20],
      game: this
    })
    this.floatingObjects.push(bigLog);

    var smallLog = new Frogger.SmallLog({
      pos: [0,80],
      game: this
    })
    this.floatingObjects.push(smallLog);
  };


})();
