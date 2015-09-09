(function(){
  var Frogger = window.Frogger = window.Frogger || {};

  var Game = Frogger.Game = function(dim_y, dim_x) {
    this.score = 0;
    this.message = false;
    this.lives = 3;
    this.lost = false;
    this.over = false;
    this.won = false;
    this.dim_y = dim_y;
    this.dim_x = dim_x;
    this.lily_pad_y = Game.LILY_PAD_Y;
    this.river_bank_y = Game.RIVER_BANK_Y;
    this.starting_strip_y = Game.STARTING_STRIP_Y;
    this.lane_y = (this.dim_y - this.river_bank_y - this.lily_pad_y - this.starting_strip_y) / 10
    this.river_y = this.lane_y * 5
    this.road_y = this.lane_y * 5
    this.addFrog();
    this.floatingObjects = [];
    this.addFloatingObjects();
    this.vehicles = [];
    this.addVehicles();
    this.lilypads = [];
    this.addLilypads();
  };

  Game.LILY_PAD_Y = 60;
  Game.RIVER_BANK_Y = 60;
  Game.STARTING_STRIP_Y = 60;

  Game.prototype.draw = function (ctx) {
    // draw lily landing pad
    ctx.fillStyle = "#71C671";
    ctx.fillRect(0,
      0, this.dim_x,
      this.lily_pad_y)
    // draw river
    ctx.fillStyle = "#63B8FF";
    ctx.fillRect(0,
      this.lily_pad_y,
      this.dim_x,
      this.river_y);
    // draw river bank
    ctx.fillStyle = "#71C671";
    ctx.fillRect(0,
      this.lily_pad_y + this.river_y,
      this.dim_x,
      this.river_bank_y)
    //draw road
    ctx.fillStyle = "#D6D6D6";
    ctx.fillRect(0, this.lily_pad_y + this.river_y + this.river_bank_y,
      this.dim_x,
      this.road_y);
    //draw starting_strip
    ctx.fillStyle = "#71C671";
    ctx.fillRect(0, this.lily_pad_y + this.river_y + this.river_bank_y + this.river_y,
      this.dim_x,
      this.starting_strip_y)
    //draw logs
    this.floatingObjects.forEach( function(floatingObject){
      floatingObject.draw(ctx);
    });
    //draw vehicles
    this.vehicles.forEach( function(vehicle){
      vehicle.draw(ctx);
    });
    //draw lilypads
    this.lilypads.forEach(function(lilypad){
      lilypad.draw(ctx)
    })
    //draw frog
    this.frog.draw(ctx);
    //draw message
    if (this.message){
      this.message.draw(ctx)
    }
  };
  
  Game.prototype.step = function() {
    this.moveObjects();
    if (this.frogOnLilypad()){
      this.updateScore();
    }
    if (this.frogInRiver() && !this.frogOnFloatingObject() || this.frogSmooshed()){
      this.lives -= 1
      this.updateLives();
    }
    if (this.score === 5){
      this.won = true;
    }
    if (this.won || this.lives === 0){
      this.lost = true;
    }
  };

  Game.prototype.gameOverMessage = function(){
    $("game-over-message").removeClass("hidden").addClass('')
  }

  Game.prototype.updateScore = function(){
    $("#score").text(this.score)
    this.frog = new Frogger.Frog({
      game: this
    })
  }

  Game.prototype.updateLives = function(){
    this.message = new Frogger.Message({
      game: this,
      message: "Ruh Roh, one life lost"
    })
    setTimeout(function(){
      this.message = false
    }, 1000)
    $("#lives").text(this.lives)
    this.frog = new Frogger.Frog({
      game: this
    })
  }

  Game.prototype.moveObjects = function () {
    this.floatingObjects.forEach( function(floatingObject){
      floatingObject.move();
        if (!this.onCanvas(floatingObject)){
          floatingObject.wrap(this.dim_x)
        }
      }.bind(this));
    this.vehicles.forEach( function(vehicle){
      vehicle.move();
        if (!this.onCanvas(vehicle)){
          vehicle.wrap(this.dim_x)
        }
      }.bind(this));
    if (this.frogInRiver()){
      this.frog.move();
    } else {
      this.frog.vel = [0,0]
    }
  };

  Game.prototype.addFrog = function(){
    this.frog = new Frogger.Frog({
      game: this
    });
  };

  Game.prototype.onCanvas = function(object){
    var left = object.pos[0];
    var right = object.pos[0] + object.dim_x;
    if ((left < 0 && right < 0)|| left > this.dim_x + 1){
      return false;
    } else {
      return true;
    }
  };

  Game.prototype.addVehicles = function(){
    var road_start = this.dim_y - this.starting_strip_y - 5*this.lane_y;
    var road_end = this.dim_y - this.starting_strip_y;
    var vehicle_y = road_start;
    for (var i = 1; i < 6; i++) {
      if (i % 2 == 0){
        car_x = 0;
        for (var j = 0; j < 8; j++) {
          if (j!== 4 && j !==0){
            var vehicle = new Frogger.Car({
              pos: [car_x, vehicle_y],
              game: this
            })
            this.vehicles.push(vehicle)
          }
          car_x += 100
        };
      } else {
        truck_x = 0;
        for (var k = 0; k < 4; k++) {
          var vehicle = new Frogger.Truck({
            pos: [truck_x, vehicle_y],
            game: this
          })
          this.vehicles.push(vehicle);
          truck_x += 200;
        }
      }
      vehicle_y += this.lane_y;
    };
  };

  Game.prototype.addLilypads = function(){
    var pad_y = this.lane_y;
    var pad_x = (this.dim_x / 10) / 2;
    for (var i = 0; i < 5; i++) {
      console.log(pad_x);
      var lilypad = new Frogger.Lilypad({
        pos: [pad_x, pad_y],
        game: this
      })
      this.lilypads.push(lilypad);
      pad_x += this.dim_x / 5;
    };
  };

  Game.prototype.addFloatingObjects = function(){
    var river_start = this.lily_pad_y;
    var river_end = this.lily_pad_y + 6 * this.lane_y;
    var log_y = river_start;
    for (var i = 1; i < 6; i++) {
      if (i % 2 == 0){
        small_log_x = 0;
        for (var j = 0; j < 8; j++) {
          if (j!== 4 && j !==0){
            var log = new Frogger.SmallLog({
              pos: [small_log_x, log_y],
              game: this
            })
            this.floatingObjects.push(log)
          }
          small_log_x += 100
        };
      } else {
        big_log_x = 0;
        for (var k = 0; k < 4; k++) {
          var log = new Frogger.BigLog({
            pos: [big_log_x, log_y],
            game: this
          })
          this.floatingObjects.push(log);
          big_log_x += 200;
        }
      }
      log_y += this.lane_y;
    };
  };

  Game.prototype.frogInRiver = function(){
    var riverStart = this.lily_pad_y
    var riverEnd = this.lily_pad_y + (5 * this.lane_y)
    return ((this.frog.pos[1] < riverEnd) && (this.frog.pos[1] > riverStart))
  }

  Game.prototype.frogOnFloatingObject = function(){
    var frogCenter = this.frog.pos;
    var frogLeft = this.frog.pos[0] - this.frog.radius;
    var frogRight = this.frog.pos[0] + this.frog.radius;
    var floating = false;
    this.floatingObjects.forEach(function(floatingObject){
      if (frogLeft > floatingObject.pos[0] &&  frogRight < floatingObject.pos[0] + floatingObject.dim_x){
        if (frogCenter[1] > floatingObject.pos[1] && frogCenter[1] < floatingObject.pos[1] + floatingObject.dim_y){
          this.frog.vel = floatingObject.vel
          floating = true;

        }
      }
    }.bind(this))
    return floating;
  }

  Game.prototype.frogSmooshed = function(){
    var frogCenter = this.frog.pos;
    var frogLeft = this.frog.pos[0] - this.frog.radius / 2;
    var frogRight = this.frog.pos[0] + this.frog.radius / 2;
    var smooshed = false;
    this.vehicles.forEach(function(vehicle){
      if ((frogRight >= vehicle.pos[0] &&  frogRight <= vehicle.pos[0] + vehicle.dim_x) ||
          (frogLeft >= vehicle.pos[0] &&  frogLeft <= vehicle.pos[0] + vehicle.dim_x)){
        if (frogCenter[1] > vehicle.pos[1] && frogCenter[1] < vehicle.pos[1] + vehicle.dim_y){
          this.frog.vel = vehicle.vel
          smooshed = true;
        }
      }
    }.bind(this))
    return smooshed;
  }

  Game.prototype.frogOnLilypad = function(){
    var frogX = this.frog.pos[0];
    var frogY = this.frog.pos[1];
    var onLilyPad = false;
    this.lilypads.forEach(function(lilypad){
      var lilyLeft = lilypad.pad_x - lilypad.radius;
      var lilyRight = lilypad.pad_x + lilypad.radius;
      var lilyTop = lilypad.pad_y - lilypad.radius;
      var lilyBottom = lilypad.pad_y + lilypad.radius;
      if (frogX > lilyLeft  && frogX < lilyRight + lilypad.dim_x){
        if (frogY > lilyTop && frogY < lilyBottom){
          if (!lilypad.scored){
            this.score += 1;
            onLilyPad = true;
            lilypad.scored = true; 
          }
        }
      }
    }.bind(this))
    return onLilyPad;
  }

})();
