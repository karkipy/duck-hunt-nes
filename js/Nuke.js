class Nuke {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = SCREEN_WIDTH / 2 - 35;
    this.y = SCREEN_HEIGHT;
  }

  setImage() {
    this.image = loadedImages[NUKE_INDICATOR];
  }

  nukeDrawImage() {
    this.ctx.drawImage(this.image, 0, 0 , 700, 70 , 200, 200, 700, 70) ;
  }
}