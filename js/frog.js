(function(){
  var Frogger = window.Frogger = window.Frogger || {};

  var Frog = Frogger.Frog = function(game){
    this.game = game;
    this.radius = Frog.RADIUS;
    this.pos = [game.dim_y + this.radius, 0]
    this.color = Frog.COLOR;
    this.vel = [0,0];
  };

  Frog.COLOR = "blue";
  Frog.RADIUS = 5;

  Frogger.Util.inherits(Frog, Frogger.MovingObject);
  
  Frog.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
  };

  Frog.prototype.fireBullet = function () {
    var b = new Frogger.Bullet(this.game, this.pos.slice(), [this.vel.slice()[0]*2, this.vel.slice()[1]*2]);
    this.game.addBullet(b);
  };

  Frog.prototype.power = function(impulse){
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

})();
