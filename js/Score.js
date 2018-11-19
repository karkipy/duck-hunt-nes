class Score {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 360;
    this.height = 60;
    this.ducksKilled = 0;
    this.x = SCREEN_WIDTH / 2 - this.width/ 2;
    this.y = SCREEN_HEIGHT - 63;
    this.duckWidth = 26;
    this.duckDimensionKilled = MAP_SPRITE[DUCK_DEAD_INDICATOR];
    this.duckDimensionAlive = MAP_SPRITE[DUCK_ALIVE_INDICATOR];
  }

  setTotalDucks(totalDucks) {
    this.totalDucks = totalDucks;
    this.wave = totalDucks / 10;
  }

  setDucksKilled() {
    this.ducksKilled +=1;
  }

  setImage () {
    this.image = loadedImages[SPRITE_INDICATOR];
  }

  drawDucks() {
    drawBorderLine(this.ctx, this.x, this.y, this.width, this.height, 2, 'white');
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.font = "30px eightBitFont";
    this.ctx.fillStyle = 'white';
    this.ctx.fillText("DUCKS",this.x + 45, this.y + this.height /2 + 10);
    let k = 0;
    for(let w = 0; w < this.wave; w += 1) {
      let dimension;
      let placeY = this.y + 10 + 20 * w;
      for(let i=0; i < 10; i += 1) {
        if (k < this.ducksKilled) {
          dimension = this.duckDimensionKilled;
        } else {
          dimension = this.duckDimensionAlive;
        }
        const aliveDimensions = updateSpritePosition(dimension,
          this.x + 85 + this.duckWidth * i, placeY);
        spriteRenderer.drawImage(this.image, aliveDimensions);
        k += 1;
      }
    }

    drawBorderLine(this.ctx,  20 , this.y + 10, this.width / 2, this.height - 20, 2, 'white');
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(20, this.y + 10 , this.width / 2, this.height - 20);
    this.ctx.font = "30px eightBitFont";
    this.ctx.fillStyle = 'white';
    this.ctx.fillText("SCORE : " + this.ducksKilled * 100, 95 , this.y + 35);

  }
}