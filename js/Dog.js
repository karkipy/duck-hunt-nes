class Dog {
  constructor() {
    this.reset();
  }

  reset(){
    this.index = 0;
    this.dimensions =  MAP_SPRITE[DOG_INDICATOR][this.index];
    this.show = false;
    this.dogAnimationId = 0;
    this.animateDown = false;
  }

  setImage() {
    this.image = loadedImages[SPRITE_INDICATOR];
  }

  setDimensions() {
    this.index += 1;
    this.dimensions = MAP_SPRITE[DOG_INDICATOR][this.index];
  }

  setDimensionsDuck(type) {
    this.catchDimensions = MAP_SPRITE[DUCK_CAUGHT_INDICATOR][type];
  }

  setShow() {
    this.show = true;
  }

  setXYPOS(x, y, waveType) {
    this.x = x;
    this.y = 450;

  }

  resetAnimation() {
    this.show = false;
    this.dogAnimationId = 0;
    this.animateDown = false;
  }

  getPOS() {
    return {
      x: this.x,
      y: this.y,
      dogAnimationId: this.dogAnimationId,
      animateDown: this.animateDown,
    }
  }

  toggleY() {
    if (this.animateDown) {
      this.y += 12;
    } else {
      this.y -=12;
      playAudio(DUCK_CAUGHT_INDICATOR);
    }
    this.dogAnimationId += 1;
  }


  drawImage() {
    spriteRenderer.drawImage(this.image, this.dimensions);
  }

  drawCatch() {
    const dimensions = updateSpritePosition(this.catchDimensions, this.x, this.y);
    spriteRenderer.drawImage(this.image, dimensions);
  }
}