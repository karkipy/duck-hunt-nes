class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 50;
    this.y = 50;
  }

  setImage() {
    this.image = loadedImages[PLAYER_INDICATOR];
  }

  setDirections(x, y) {
    this.x = x -  CURSOR_WIDTH / 2;
    this.y = y -  CURSOR_HEIGHT / 2 ;
  }

  drawImage() {
    this.ctx.drawImage(this.image, this.x, this.y, CURSOR_WIDTH , CURSOR_HEIGHT);
  }
}