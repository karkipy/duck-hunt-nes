class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 50;
    this.y = 50;
    this.width = DIMESNSION_GUN[0].width;
    this.height = DIMESNSION_GUN[0].height;
  }

  setImage() {
    this.image = loadedImages[PLAYER_INDICATOR];
  }

  setDirections(x, y) {
    this.x = x -  this.width / 2;
    this.y = y -  this.height / 2 ;
  }

  drawCursor() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width , this.height);
  }
}