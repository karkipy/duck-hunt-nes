function drawBorder(ctx, xPos, yPos, width, height, thickness = 1) {
  ctx.fillStyle='rgba(255, 255, 255, 0.5)';
  ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
}

function drawBorderLine(ctx, xPos, yPos, width, height, thickness = 1, color= "black") {
  ctx.fillStyle=color;
  ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
}


function setCursor(mouseObj) {
  let { x, y } = mouseObj;
  let pointer = false;
  POINTER_DIMENSION.forEach(m => {
    let { xS, yS, xE, yE } = m;
    if(x >= xS && x<=xE && y>=yS && y<=yE) {
      pointer = true;
    }
  });

  if(pointer) {
    canvas.style.cursor = 'pointer';
  } else {
    canvas.style.cursor = 'default';
  }
}

function setPlayerIndicator(mouseObj) {
  let { x, y } = mouseObj;
  let result = null;
  POINTER_DIMENSION.forEach(m => {
    let { xS, yS, xE, yE, type } = m;
    if(x >= xS && x<=xE && y>=yS && y<=yE) {
      result = type;
    }
  });
  return result;
}