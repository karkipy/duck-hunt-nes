function drawBorder(ctx, xPos, yPos, width, height, thickness = 1) {
  ctx.fillStyle='rgba(255, 255, 255, 0.5)';
  ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));

}