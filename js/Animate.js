
function animateDogWalking() {
  if (animationId % (12) === 0) {
    animateDogId +=1;
    if (animateDogId < MAP_SPRITE[DOG_INDICATOR].length) {
      dog.setDimensions();
    }
  }
}