class Duck {
  constructor(ctx) {
    this.ctx = ctx;
    this.type = Math.round(Math.random());
    this.x = 500;
    this.y = 300;
    this.dx = 1;
    this.dy = 1;
    this.duckDimensions = MAP_SPRITE[DUCK_INDICATOR][BLACK];
    this.dimensions = this.duckDimensions[LEFT];
    this.death = false;
    this.duckAnimationId = 0;
    this.index = 0;
    this.renderDimension = this.dimensions[FLY_UP][this.index];
    this.duckSpeed = 2;
  }

  setImage() {
    this.image = loadedImages[SPRITE_INDICATOR];
  }

  setDimensions() {
    const duckPos = this.dimensions[FLY_UP];
    if (this.duckAnimationId % DUCK_ANIMATION_SEQUENCE === 0) {
      this.index = (this.index + 1) % duckPos.length;
      this.renderDimension = duckPos[this.index];
    }
    this.y -=2;
    this.x +=2;
    this.duckAnimationId +=1;
  }

  death() {

  }

  drawImage() {
    this.setDimensions();
    const updatedDimension = updateSpritePosition(this.renderDimension, this.x, this.y);
    spriteRenderer.drawImage(this.image, updatedDimension);
    // const deathDimen = this.dimensions[DUCK_DEATH];
    // spriteRenderer.drawImage(this.image,deathDimen);
    // const dropDimen = this.dimensions[DUCK_DROP];

    // spriteRenderer.drawImage(this.image, dropDimen[0]);
    // spriteRenderer.drawImage(this.image, dropDimen[1]);

    const dimen = this.duckDimensions[LEFT][FLY_UP];
    // spriteRenderer.drawImage(this.image, dimen[0]);
    // spriteRenderer.drawImage(this.image, dimen[1]);
    spriteRenderer.drawImage(this.image, dimen[2]);

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