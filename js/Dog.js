class Dog {
  constructor() {
    this.index = 0;
    this.dimensions =  MAP_SPRITE[DOG_INDICATOR][this.index];
  }

  setImage() {
    this.image = loadedImages[SPRITE_INDICATOR];
  }

  setDimensions() {
    this.index += 1;
    this.dimensions = MAP_SPRITE[DOG_INDICATOR][this.index];
  }

  drawImage() {
    spriteRenderer.drawImage(this.image, this.dimensions);
  }
}