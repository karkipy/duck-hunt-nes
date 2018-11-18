class Menu {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = MENU_XPOS_START;
    this.y = MENU_YPOS_START;
    this.width = MENU_WIDTH;
    this.height = MENU_HEIGHT;

  }

  setImage() {
    this.normalGunImage = loadedImages[NORMAL_GUN_INDICATOR];
    this.shotGunImage = loadedImages[SHOT_GUN_INDICATOR];
  }

  drawNormalGunBorder(){

    drawBorderLine(this.ctx, 280, 230, 190, 120, 2, 'white');
    this.ctx.fillStyle = '#1A1A1A';
    this.ctx.fillRect(280, 230, 190, 120);

  }

  drawShotGunBorder(){

    drawBorderLine(this.ctx, 500, 230, 240, 120, 2, 'white');
    this.ctx.fillStyle = '#1A1A1A';
    this.ctx.fillRect(500, 230, 240, 120);

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


    if (playerGun === NORMAL_GUN_INDICATOR) {
      this.drawNormalGunBorder();
    } else {
      this.drawShotGunBorder();
    }


    this.ctx.drawImage(this.normalGunImage, 320, 230, 120 , 120);
    this.ctx.fillStyle = "white";
    this.ctx.fillText("PISTOL", 380 , 380);
    this.ctx.fillText("1 X DUCK", 380 , 405);



    this.ctx.drawImage(this.shotGunImage, 430, 200, 380 , 170);
    this.ctx.fillStyle = "white";
    this.ctx.fillText("SHOTGUN", 620 , 380);
    this.ctx.fillText("2 X DUCK", 620 , 405);


    // Button for the game

    drawBorderLine(this.ctx, 425, 420, 120, 50, 1, 'white');
    this.ctx.font = "40px eightBitFont";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("PLAY", 485 , 455);

    this.ctx.font = "25px eightBitFont";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("HOW TO TURN ON SOUND ?", 230, 520);

    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("chrome://flags/#autoplay-policy", 280, 560);


    this.ctx.font = "18px eightBitFont";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("( CHROME HAS DISABLED AUTO SOUND PLAY. )", 510, 518);

    this.ctx.fillText("1)  OPEN", 135, 560);
    this.ctx.fillText("2) SET NO USER GESTURED IS REQUIRED", 560, 560);
    this.ctx.fillText("3) RELAUNCH CHROME", 815, 560);

  }
}