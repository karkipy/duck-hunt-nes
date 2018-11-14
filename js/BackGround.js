class BackGround {
  constructor(ctx) {
   this.ctx = ctx;
  }

  setImage() {
    this.cloud = loadedImages[CLOUD_INDICATOR];
    this.ground = loadedImages[SPRITE_INDICATOR];
  }

  drawSky(){
    this.ctx.fillStyle = SKY_COLOR;
    this.ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    CLOUD_POSITION.forEach(cloud => {
      this.ctx.drawImage(this.cloud, cloud.x, cloud.y, CLOUD_WIDTH, CLOUD_HEIGHT);
    })
  }

  drawGround() {
    const dimensions = MAP_SPRITE[GROUND_INDICATOR];
    const { sourceX, sourceY, sourceWidth, sourceHeight, placeX, placeY, width, height } = dimensions;
    this.ctx.drawImage(this.ground, sourceX, sourceY, sourceWidth, sourceHeight , placeX, placeY, width , height);
  }
}