
function animateDogWalking() {
  if (animationId % (DOG_ANIMATION_SEQUENCE) === 0) {
    animateDogId +=1;
    if (animateDogId < MAP_SPRITE[DOG_INDICATOR].length) {
      dog.setDimensions();
    }
  }
}
