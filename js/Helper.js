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
    // alert('Some Sounds could not be played, check console');
    // console.log(
    //   '%cSounds cannot be played, Check you user policy. Check README for solution or : \n%c1) Open chrome://flags/#autoplay-policy\n 2) Setting No user gesture is required \n 3)  Relaunch Chrome',
    // 'color:red; font-size: 16px;', 'color:black, font-size: 14px;');


  });
}