class Player {
  constructor(ctx, playerIndicator) {
    this.ctx = ctx;
    this.x = 50;
    this.y = 50;
    this.width = DIMESNSION_GUN[playerIndicator].width;
    this.height = DIMESNSION_GUN[playerIndicator].height;
    this.barX = 850;
    this.barY = 570;
    this.barWidth = 120;
    this.barWidthContainer = 120;
    this.barHeight = 20;
    this.ready = true;
  }

  setImage() {
    this.image = loadedImages[PLAYER_INDICATOR];
  }

  getDimensions() {
    let playerX = this.x;
    let playerY = this.y;
    let playerRadius = this.width/ 2;
    return {
      playerX,
      playerY,
      playerRadius,
    }
  }

  setDirections(x, y) {
    this.x = x - this.width / 2;
    this.y = y -  this.height / 2 ;
  }

  checkBarWidth() {
    if(this.barAnimate > 0 && this.barAnimate < this.barWidthContainer && !this.ready) {
      this.barWidth =  this.barAnimate;
      this.barAnimate += 3;
    } else {
      this.ready = true;
    }
  }

  drawBar() {

    this.checkBarWidth();
    // call border
    drawBorder(this.ctx, this.barX, this.barY, this.barWidthContainer, this.barHeight);
    this.ctx.fillStyle='#FFF';
    this.ctx.fillRect(this.barX, this.barY, this.barWidth, this.barHeight);
  }

  gunShot() {
    this.barWidth = 0;
    this.barAnimate = 1;
  }

  drawCursor() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width , this.height);
  }
}