class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 50;
    this.y = 50;
    this.width = DIMESNSION_GUN[NORMAL_GUN_INDICATOR].width;
    this.height = DIMESNSION_GUN[NORMAL_GUN_INDICATOR].height;
  }

  setImage() {
    this.image = loadedImages[PLAYER_INDICATOR];
  }

  setDirections(x, y) {
    this.x = x -  this.width / 2;
    this.y = y -  this.height / 2 ;
  }

  drawBar() {
    let xPos = 850;
    let yPos = 570;
    let width = 120;
    let height = 20;

    // call border
    drawBorder(this.ctx, xPos, yPos, width, height);

    this.ctx.fillStyle='#FFF';
    this.ctx.fillRect(xPos, yPos, width, height);

  }

  drawCursor() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width , this.height);
  }
}