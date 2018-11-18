class Duck {
  constructor(ctx, type, direction) {
    this.ctx = ctx;
    this.initDuck(type, direction);
  }

  initDuck(type, direction) {
    this.type = type;
    this.x = direction === RIGHT ? 300 : 800;
    this.y = 350;
    this.dx = 1;
    this.dy = -1;
    this.duckDirection =  direction;
    this.duckDimensions = MAP_SPRITE[DUCK_INDICATOR][this.type]; // depends
    this.dimensions = this.duckDimensions[this.duckDirection]; // depends
    this.dead = false;
    this.duckAnimationId = 0;
    this.index = 0;
    this.duckMovement = DUCK_MOVEMENT[1]; // initial will always be 1
    this.renderDimension = this.dimensions[this.duckMovement][this.index];
    this.duckSpeed = 2;
    this.duckMovementChangeSequence = Math.floor(Math.random() * (80 - 60) + 60);
    this.duckDirectionSequence =  Math.floor(Math.random() * (200 - 200) + 250);
    this.duckDeathTiming = 30;
    this.reset = false;
  }

  setImage() {
    this.image = loadedImages[SPRITE_INDICATOR];
  }

  setDuckMovement() {
    if (this.duckAnimationId % this.duckMovementChangeSequence === 0) {
      const currentIndex = DUCK_MOVEMENT.indexOf(this.duckMovement);
      const nextIndex = (currentIndex +1 ) % DUCK_MOVEMENT.length;
      this.duckMovement = DUCK_MOVEMENT[nextIndex];

    }
    this.setDuckDirections();
    this.checkBoundary();
    this.setRandomDuckDirections();

    if (this.y !== 0 && this.duckMovement ===  FLY_UP) {
      playAudio(DUCK_FLAP_INDICATOR);
    }

    if (this.duckMovement === FLY_SAME && this.duckAnimationId % 5 === 0) {
      playAudio(DUCK_QUACK_INDICATOR);
    }
  }

  setDuckDirections() {
    if(this.duckMovement === FLY_UP ){
      this.y += this.duckSpeed * this.dy;
      this.x += this.duckSpeed * this.dx;
    } else {
      this.x += this.duckSpeed * this.dx;
    }
  }

  checkBoundary() {
    if (this.y < 0) {
      this.y = 0;
      this.duckMovement = FLY_SAME;
    }
  }


  setRandomDuckDirections() {
    if (this.duckAnimationId % this.duckDirectionSequence === 0) {
      const currentIndex = DUCK_DIRECTION.indexOf(this.duckDirection);
      const nextIndex = (currentIndex + 1 ) % DUCK_DIRECTION.length;
      const nextDirection = DUCK_DIRECTION[nextIndex];
      this.duckDirection = nextDirection;
      this.dimensions =  this.duckDimensions[this.duckDirection];
    }

    if(this.duckDirection === RIGHT) {
      this.dx = -1;
    } else {
      this.dx = 1;
    }
  }

  setDimensions() {
    const duckPos = this.dimensions[this.duckMovement];
    if (this.duckAnimationId % DUCK_ANIMATION_SEQUENCE === 0) {
      this.index = (this.index + 1) % duckPos.length;
      this.renderDimension = duckPos[this.index];
    }
    this.duckAnimationId +=1;
  }

  setDuckDeathMovements() {
    if(this.duckAnimationId < this.duckDeathTiming) {
      this.renderDimension = this.duckDimensions[DUCK_DEATH];
      this.duckDeathIndex = 0;
    } else {
      this.dimensions = this.duckDimensions[DUCK_DROP];
      this.renderDimension = this.dimensions[this.duckDeathIndex];
      if (this.duckAnimationId % 6 === 0) {
        this.duckDeathIndex = (this.duckDeathIndex + 1) % this.dimensions.length;
      }
      this.y +=4;
      if (this.y > DUCK_LAND_HEIGHT) {
        if (!this.reset) {
          stopAudio(DUCK_FALL_INDICATOR);
          playAudio(DUCK_LAND_INDICATOR);
        }
        this.reset = true;
      } else {
        playAudio(DUCK_FALL_INDICATOR);
      }
    }
    this.duckAnimationId += 1;
  }


  getAllDimensions() {
    const { width, height } = this.renderDimension;
    return {
      x: this.x,
      y: this.y,
      width,
      height,
    }
  }

  duckRespawn(type, direction) {
    this.initDuck(type, direction);
  }

  death() {
    this.dead = true;
    this.duckAnimationId = 0;
  }

  drawImage() {
    if (this.dead) {
      this.setDuckDeathMovements();
    } else {
      this.setDuckMovement();
      this.setDimensions();
    }
    const updatedDimension = updateSpritePosition(this.renderDimension, this.x, this.y);
    spriteRenderer.drawImage(this.image, updatedDimension);
  }
}