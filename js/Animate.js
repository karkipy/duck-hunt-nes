
function animateDogWalking() {
  if (animationId % (DOG_ANIMATION_SEQUENCE) === 0) {
    animateDogId +=1;
    if (animateDogId < MAP_SPRITE[DOG_INDICATOR].length) {
      if (animateDogId === MAP_SPRITE[DOG_INDICATOR].length - 2)
      {
        playAudio(DOG_BARK_INDICATOR);
      }
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



function animateDogCatchingDuckLast() {
  const { x, y, dogAnimationId } = dog.getPOS();
  if (animationId % DUCK_CAUGHT_SEQUENCE === 0) {
    if (dogAnimationId <  15) {
      if (y > DUCK_LAND_HEIGHT) {
        dog.toggleY();
      } else {
        dog.animateDown = true;
        dog.toggleY();
      }
      canvas.style.cursor = 'default';
      return false;
    } else {
      dog.resetAnimation();
    }
  }
  dog.drawCatch();
}