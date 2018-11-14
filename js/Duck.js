class Duck {
  constructor(ctx) {
    this.ctx = ctx;
    this.type = Math.round(Math.random());
    this.dimensions = MAP_SPRITE[DUCK_INDICATOR][BLACK];
  }

  setImage() {
    console.log(this.dimensions);
    this.image = loadedImages[SPRITE_INDICATOR];
  }

  drawImage() {
    this.ctx.drawImage(this.image, 0, 420, 70, 70, 100, 100, 70, 70);
  }
}