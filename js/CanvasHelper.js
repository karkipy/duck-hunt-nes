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

function getIndicatorAndDuck(mouseObj) {
  let { x, y } = mouseObj;
  let result = null;
  POINTER_DIMENSION.forEach(m => {
    let { xS, yS, xE, yE, gun_indicator, ducks_no } = m;
    if(x >= xS && x<=xE && y>=yS && y<=yE) {
      result = { gun_indicator, ducks_no };
    }
  });
  return result;
}


function getGameOverRes(mouseObj) {
  let { x, y } = mouseObj;
  let result = false;
  let { xS, yS, xE, yE } = NUKE_DIMENSION;
  if(x >= xS && x<=xE && y>=yS && y<=yE) {
    result = true;
  }
  return result;
}

function setGameOverCursor(mouseObj) {
  let { x, y } = mouseObj;
  let { xS, yS, xE, yE } = NUKE_DIMENSION;
  if(x >= xS && x<=xE && y>=yS && y<=yE) {
    setCursor();
  } else {
    defaultCursor();
  }
}

function setCursor() {
  canvas.style.cursor = 'pointer';
}

function removeCursor() {
  canvas.style.cursor = 'none';
}

function defaultCursor() {
  canvas.style.cursor = 'default';
}