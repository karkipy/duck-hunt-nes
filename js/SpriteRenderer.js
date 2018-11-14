class SpriteRenderer {
  constructor(ctx) {
    this.ctx = ctx;
  }

  drawImage(image, dimensions) {
    const {
      sourceX, sourceY, sourceWidth, sourceHeight, placeX, placeY, width, height,
    } = dimensions;
    this.ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight , placeX, placeY, width , height);
  }
}