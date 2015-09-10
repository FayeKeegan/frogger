(function(){
  var Frogger = window.Frogger = window.Frogger || {};

  var Frog = Frogger.Frog = function(options){
    Frogger.MovingObject.call(this, options);
    this.vel = Frog.VEL;
    this.game = options.game;
    this.radius = Frog.RADIUS;
    this.pos = [this.game.dim_x / 2, this.game.dim_y - 15]
    this.color = Frog.COLOR;
    this.previousDirection = [0, -1];
  };

  Frog.COLOR = "pink";
  Frog.RADIUS = 10;
  Frog.VEL = [0,0];

  Frogger.Util.inherits(Frogger.Frog, Frogger.MovingObject);

  Frog.prototype.leap = function(direction){
    this.pos[0] += direction[0] * this.game.lane_y;
    this.pos[1] += direction[1] * this.game.lane_y;
    this.previousDirection = direction;
  };

  Frog.prototype.draw = function(ctx){
    this.drawBody(ctx);
    this.drawLegs(ctx)
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

  Frog.prototype.translateDirection = function(){
    var x = this.previousDirection[0];
    var y = this.previousDirection[1];
    if (x === -1){
      return "left";
    } else if (x === 1){
      return "right"
    } else if (y === 1){
      return "down"
    } else if (y === -1){
      return "up"
    }
  }


  Frog.prototype.drawLegs = function(ctx){
    distToLeg = this.radius;
    distBetweenLegs = this.radius * 3/4;
    var direction = this.translateDirection();
    var directionsHash = {};
    if (direction === "up" || direction === "down"){
      directionsHash = {"upLeftX" : this.pos[0] - distBetweenLegs,
       "upRightX": this.pos[0] + distBetweenLegs,
       "upLeftY": this.pos[1] - distToLeg,
       "upRightY":this.pos[1] - distToLeg,
       "downLeftX" : this.pos[0] - distBetweenLegs,
       "downRightX": this.pos[0] + distBetweenLegs,
       "downLeftY": this.pos[1] + distToLeg,
       "downRightY":this.pos[1] + distToLeg
     }
    } else {
      directionsHash = {"upLeftX" : this.pos[0] - distBetweenLegs,
       "upRightX": this.pos[0] + distBetweenLegs,
       "upLeftY": this.pos[1] - distToLeg,
       "upRightY":this.pos[1] - distToLeg,
       "downLeftX" : this.pos[0] - distBetweenLegs,
       "downRightX": this.pos[0] + distBetweenLegs,
       "downLeftY": this.pos[1] + distToLeg,
       "downRightY":this.pos[1] + distToLeg
     }
    }
    var upLeftX = directionsHash["upLeftX"];
    var upLeftY = directionsHash["upLeftY"];
    var upRightX = directionsHash["upRightX"];
    var upRightY = directionsHash["upRightY"];
    var downLeftX = directionsHash["downLeftX"];
    var downLeftY = directionsHash["downLeftY"];
    var downRightX = directionsHash["downRightX"];
    var downRightY = directionsHash["downRightY"];
    this.drawLeg(ctx, [upLeftX, upLeftY]);
    this.drawLeg(ctx, [upRightX, upRightY]);
    this.drawLeg(ctx, [downLeftX, downLeftY]);
    this.drawLeg(ctx, [downRightX, downRightY]);
  }

  Frog.prototype.drawLeg = function(ctx, pos){
    var path = new Path2D();
    var endAngle = Math.PI;
    ctx.beginPath();
    ctx.arc(pos[0],pos[1],4,Math.PI,-Math.PI,false);
    ctx.lineTo(pos[0],pos[1]);
    ctx.fillStyle = "pink"
    ctx.fill();
  }

  Frog.prototype.drawEyes = function(ctx){
    distToEye = this.radius / 2;
    distBetweenEyes = this.radius / 3;
    var direction = this.translateDirection();
    var directionHash = {
      "up": {"leftX" : this.pos[0] - distBetweenEyes,
             "rightX": this.pos[0] + distBetweenEyes,
              "leftY": this.pos[1] - distToEye,
              "rightY":this.pos[1] - distToEye
            },
      "down": {"leftX" : this.pos[0] - distBetweenEyes,
             "rightX": this.pos[0] + distBetweenEyes,
              "leftY": this.pos[1] + distToEye,
              "rightY":this.pos[1] + distToEye
            },
      "left": {"leftX" : this.pos[0] - distToEye,
             "rightX": this.pos[0] - distToEye,
              "leftY": this.pos[1] + distBetweenEyes,
              "rightY":this.pos[1] - distBetweenEyes
            },
      "right": {"leftX" : this.pos[0] + distToEye,
             "rightX": this.pos[0] + distToEye,
              "leftY": this.pos[1] - distBetweenEyes,
              "rightY":this.pos[1] + distBetweenEyes
            }
    }
    var leftX = directionHash[direction]["leftX"]
    var rightX = directionHash[direction]["rightX"]
    var leftY =  directionHash[direction]["leftY"]
    var rightY =  directionHash[direction]["rightY"]
    this.drawEye(ctx, [leftX, leftY]);
    this.drawEye(ctx, [rightX, rightY]);
  }

  Frog.prototype.drawEye = function(ctx, pos){
    var path = new Path2D();
    var endAngle = Math.PI;
    ctx.beginPath();
    ctx.arc(pos[0],pos[1],3,Math.PI,-Math.PI,false);
    ctx.lineTo(pos[0],pos[1]);
    ctx.fillStyle = "white";
    ctx.fill();
    var path = new Path2D();
    var endAngle = Math.PI;
    ctx.beginPath();
    ctx.arc(pos[0],pos[1],1.5,Math.PI,-Math.PI,false);
    ctx.lineTo(pos[0],pos[1]);
    ctx.fillStyle = "black"
    ctx.fill();
  }


})();
