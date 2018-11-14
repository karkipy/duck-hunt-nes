class Duck {
  constructor(ctx) {
    this.ctx = ctx;
    this.type = Math.round(Math.random());
    this.dimensions = MAP_SPRITE[DUCK_INDICATOR][BLACK];
  }

  setImage() {
    this.image = loadedImages[SPRITE_INDICATOR];
  }

  drawImage() {
    const dimen = this.dimensions[LEFT][FLY];
    spriteRenderer.drawImage(this.image, dimen[0]);
    spriteRenderer.drawImage(this.image, dimen[1]);
    spriteRenderer.drawImage(this.image, dimen[2]);
  }
}