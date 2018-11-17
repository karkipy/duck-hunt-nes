class Player {
  constructor(ctx, playerIndicator) {
    this.ctx = ctx;
    this.x = 50;
    this.y = 50;
    this.playerIndicator = playerIndicator;
    this.width = DIMESNSION_GUN[this.playerIndicator].width;
    this.height = DIMESNSION_GUN[this.playerIndicator].height;
    this.barX = 850;
    this.barY = 570;
    this.barWidth = 120;
    this.barWidthContainer = 120;
    this.barHeight = 20;
    this.ready = true;
    this.waitTime = DIMESNSION_GUN[this.playerIndicator].time;
  }

  setImage() {
    this.image = loadedImages[PLAYER_INDICATOR];
  }

  updatePlayer(playerIndicator) {
    this.playerIndicator = playerIndicator;
    this.width = DIMESNSION_GUN[this.playerIndicator].width;
    this.height = DIMESNSION_GUN[this.playerIndicator].height;
    this.waitTime = DIMESNSION_GUN[this.playerIndicator].time;
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
      this.barAnimate += this.waitTime;
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
    this.ready = false;
    playAudio(this.playerIndicator);
  }

  drawCursor() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width , this.height);
  }
}