
function animateDogWalking() {
  if (animationId % (DOG_ANIMATION_SEQUENCE) === 0) {
    animateDogId +=1;
    if (animateDogId < MAP_SPRITE[DOG_INDICATOR].length) {
      dog.setDimensions();
    }
  }
}


function animateDogCatchingDuck() {
  const { x, y, dogAnimationId } = dog.getPOS();
  if (animationId % DUCK_CAUGHT_SEQUENCE === 0) {
    if (dogAnimationId <  15) {
      if (y > DUCK_LAND_HEIGHT) {
        dog.toggleY();
      } else {
        dog.animateDown = true;
        dog.toggleY();
      }
    } else {
      dog.resetAnimation();
    }
  }
  dog.drawCatch();
}