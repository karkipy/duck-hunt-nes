function getSpriteObject(sx, sy, sw, sh, dx, dy, dw, dh) {
  return {
    sourceX: sx,
    sourceY: sy,
    sourceWidth: sw,
    sourceHeight: sh,
    placeX: dx,
    placeY: dy,
    width: dw,
    height: dh,
  }
}

function updateSpritePosition(spriteObj, x, y) {
  return {
    ...spriteObj,
    placeX: x,
    placeY: y,
  }
}

function playAudio(indicator) {
  loadedSounds[indicator].play().catch(function(error) {

  });
}

function stopAudio(indicator) {
  loadedSounds[indicator].pause();
  loadedSounds[indicator].currentTime = 0;
}