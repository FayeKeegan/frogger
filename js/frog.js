(function(){
  var Frogger = window.Frogger = window.Frogger || {};

  var Frog = Frogger.Frog = function(options){
    Frogger.MovingObject.call(this, options);
    this.vel = Frog.VEL;
    this.game = options.game;
    this.radius = Frog.RADIUS;
    this.pos = [this.game.dim_x / 2, this.game.dim_y - 15]
    this.color = Frog.COLOR;
  };

  Frog.COLOR = "rgb(78, 159, 21)";
  Frog.RADIUS = 10;
  Frog.VEL = [0,0];

  Frogger.Util.inherits(Frogger.Frog, Frogger.MovingObject);

  Frog.prototype.leap = function(direction){
    this.pos[0] += direction[0] * this.game.lane_y;
    this.pos[1] += direction[1] * this.game.lane_y;
  };

  Frog.prototype.draw = function(ctx){
    this.drawBody(ctx);
    this.drawEyes(ctx);
  };

  Frog.prototype.drawBody = function(ctx){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
    ctx.closePath();
  }

  Frog.prototype.drawEyes = function(ctx){
    var leftX = this.pos[0] - this.radius / 3;
    var rightX = this.pos[0] + this.radius / 3;
    var eyeY =  this.pos[1] - this.radius / 2;
    this.drawEye(ctx, [leftX, eyeY]);
    this.drawEye(ctx, [rightX, eyeY]);
  }

  Frog.prototype.drawEye = function(ctx, pos){
    var path = new Path2D();
    var endAngle = Math.PI;
    ctx.beginPath();
    ctx.arc(pos[0],pos[1],3,Math.PI,-Math.PI,false);
    ctx.lineTo(pos[0],pos[1]);
    ctx.fillStyle = "white"
    ctx.fill();
    var path = new Path2D();
    var endAngle = Math.PI;
    ctx.beginPath();
    ctx.arc(pos[0],pos[1] - 1.5,1.5,Math.PI,-Math.PI,false);
    ctx.lineTo(pos[0],pos[1]);
    ctx.fillStyle = "black"
    ctx.fill();
  }


})();
