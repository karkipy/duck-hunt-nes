class Duck {
  constructor(ctx) {
    this.ctx = ctx;
    this.type = Math.round(Math.random());
    this.dimensions = MAP_SPRITE[DUCK_INDICATOR][BLACK];
    this.x = 500;
    this.y = 300;
  }

  setImage() {
    this.image = loadedImages[SPRITE_INDICATOR];
  }

  drawImage() {
    const dimen = this.dimensions[LEFT][FLY_UP];
    spriteRenderer.drawImage(this.image, updateSpritePosition(dimen[0], this.x, this.y));
    // spriteRenderer.drawImage(this.image, dimen[1]);
    // spriteRenderer.drawImage(this.image, dimen[2]);

    // const dimensFl = this.dimensions[LEFT][FLY_SAME];

    // spriteRenderer.drawImage(this.image, dimensFl[0]);
    // spriteRenderer.drawImage(this.image, dimensFl[1]);
    // spriteRenderer.drawImage(this.image, dimensFl[2]);


    // const dimenRIGHT = this.dimensions[RIGHT][FLY_UP];
    // spriteRenderer.drawImage(this.image, dimenRIGHT[0]);
    // spriteRenderer.drawImage(this.image, dimenRIGHT[1]);
    // spriteRenderer.drawImage(this.image, dimenRIGHT[2]);

    // const dimenRIGHTFL = this.dimensions[RIGHT][FLY_SAME];
    // spriteRenderer.drawImage(this.image, dimenRIGHTFL[0]);
    // spriteRenderer.drawImage(this.image, dimenRIGHTFL[1]);
    // spriteRenderer.drawImage(this.image, dimenRIGHTFL[2]);

  }
}