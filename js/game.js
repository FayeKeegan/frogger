(function(){
  var Frogger = window.Frogger = window.Frogger || {};

  var Game = Frogger.Game = function(dim_y, dim_x) {
    this.dim_y = dim_y;
    this.dim_x = dim_x;
    this.lily_pad_y = Game.LILY_PAD_Y;
    this.river_bank_y = Game.RIVER_BANK_Y;
    this.starting_strip_y = Game.STARTING_STRIP_Y;
    this.lane_y = (this.dim_y - this.river_bank_y - this.lily_pad_y - this.starting_strip_y) / 10
    this.river_y = this.lane_y * 5
    this.road_y = this.lane_y * 5
    this.floatingObjects = [];
    this.addFloatingObjects();
  };

  Game.LILY_PAD_Y = 50;
  Game.RIVER_BANK_Y = 50;
  Game.STARTING_STRIP_Y = 50;

  Game.prototype.draw = function (ctx) {
    // draw lily pad
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


})();
