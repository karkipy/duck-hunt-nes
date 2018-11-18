class Score {
  constructor(ctx) {
    this.ctx = ctx;
    this.ducksKilled = 0;
  }

  setTotalDucks(totalDucks) {
    this.totalDucks = totalDucks;
  }

  setImage () {
    this.image = loadedImages[SPRITE_INDICATOR];
  }

  drawDucks() {

  }
}