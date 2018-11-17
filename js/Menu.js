class Menu {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = (SCREEN_WIDTH - MENU_WIDTH) / 2;
    this.y = (SCREEN_HEIGHT - MENU_HEIGHT) / 2;
    this.width = MENU_WIDTH;
    this.height = MENU_HEIGHT;

  }

  setImage() {
    this.normalGunImage = loadedImages[NORMAL_GUN_INDICATOR];
    this.shotGunImage = loadedImages[SHOT_GUN_INDICATOR];
  }

  drawMenu() {
    drawBorderLine(this.ctx, this.x, this.y, this.width, this.height, 5 , "white");
    this.ctx.fillStyle = '#1A1A1A';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.font = "50px eightBitFont";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText("DUCK", SCREEN_WIDTH/ 2, 100);
    this.ctx.fillText("HUNT", SCREEN_WIDTH/ 2, 135);
    this.ctx.font = "25px eightBitFont";
    this.ctx.fillText("PICK YOUR WEAPON ", SCREEN_WIDTH/ 2, 190);

    this.ctx.drawImage(this.normalGunImage, 300, 250, 100 , 100);
    this.ctx.drawImage(this.shotGunImage, 400, 250, 350 , 150);
  }
}