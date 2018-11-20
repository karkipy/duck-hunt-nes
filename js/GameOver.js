class GameOver {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 450;
    this.height = 300;
    this.x = SCREEN_WIDTH / 2 - this.width/2;
    this.y = SCREEN_HEIGHT / 2 - this.height/2;
  }

  drawNuke() {
    drawBorderLine(this.ctx, this.x, this.y, this.width, this.height, 3, 'white');
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    this.ctx.font = "50px eightBitFont";
    this.ctx.fillStyle = 'white';
    this.ctx.fillText("Nuke 'Em  ? ", this.x + 70, this.y + 30);

    const {
      xS ,yS, xE, yE
    } = NUKE_DIMENSION;
    this.ctx.fillRect(xS, yS,  xE -  xS, yE - yS);

    this.ctx.font = "40px eightBitFont";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText('YES', this.x + 70 + 30 , this.y + 150 + 30);


  }
}