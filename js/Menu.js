class Menu {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = (SCREEN_WIDTH - MENU_WIDTH) / 2;
    this.y = (SCREEN_HEIGHT - MENU_HEIGHT) / 2;
    this.width = MENU_WIDTH;
    this.height = MENU_HEIGHT;

  }

  drawMenu() {
    drawBorderLine(this.ctx, this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}