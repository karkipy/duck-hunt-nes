class Nuke {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = SCREEN_WIDTH / 2 - 35;
    this.y = SCREEN_HEIGHT;
    this.index = 0;
    this.nukeanimationId = 0;
    this.dimensions = MAP_SPRITE[NUKE_INDICATOR];
  }

  setImage() {
    this.image = loadedImages[NUKE_INDICATOR];
  }

  testDraw() {
    const y = 370;
    let x = 100;
    spriteRenderer.drawImage(this.image, updateSpritePosition(this.dimensions[0], x, y));

    x+= 90;
    spriteRenderer.drawImage(this.image, updateSpritePosition(this.dimensions[1], x, y));

    x+= 90;
    spriteRenderer.drawImage(this.image, updateSpritePosition(this.dimensions[2], x, y));


    x+= 90;
    spriteRenderer.drawImage(this.image, updateSpritePosition(this.dimensions[3], x, y));

    x+= 90;
    spriteRenderer.drawImage(this.image, updateSpritePosition(this.dimensions[4], x, y));

    x+= 90;
    spriteRenderer.drawImage(this.image, updateSpritePosition(this.dimensions[5], x, y));


    x+= 90;
    spriteRenderer.drawImage(this.image, updateSpritePosition(this.dimensions[6], x, y));

    x+= 90;
    spriteRenderer.drawImage(this.image, updateSpritePosition(this.dimensions[7], x, y));

    x+= 90;
    spriteRenderer.drawImage(this.image, updateSpritePosition(this.dimensions[8], x, y));




    x+= 160;
    spriteRenderer.drawImage(this.image, updateSpritePosition(this.dimensions[9], x, y + 5));



    x+= 160;
    spriteRenderer.drawImage(this.image, updateSpritePosition(this.dimensions[10], x, y));



    x+= 160;
    spriteRenderer.drawImage(this.image, updateSpritePosition(this.dimensions[11], x, y));


    x+= 160;
    spriteRenderer.drawImage(this.image, updateSpritePosition(this.dimensions[12], x, y));


    x+= 160;
    spriteRenderer.drawImage(this.image, updateSpritePosition(this.dimensions[13], x, y));

  }

  nukeDrawImage() {
    this.testDraw();
    // if(this.nukeanimationId % 8 === 0) {
    //   if(this.index === 0 && this.y > 375) {
    //     this.y -= 10;

    //   } else {
    //     if(this.nukeanimationId % 2 === 0) {
    //       this.index += 1;
    //       // debugger;
    //       this.dimensions = MAP_SPRITE[NUKE_INDICATOR][this.index];
    //     }
    //   }
    // }
    // this.nukeanimationId += 1;
    // spriteRenderer.drawImage(this.image, updateSpritePosition(this.dimensions, this.x, this.y));
    // console.log(this.nukeanimationId, );
  }
}