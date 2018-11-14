const canvas = document.getElementById('gameContainer');
const ctx = canvas.getContext('2d');

let animationReq;

// Player and Ducks

let player = new Player(ctx);
function clearAll(){
  ctx.clearRect(0, 0 , SCREEN_WIDTH, SCREEN_HEIGHT);
}



function gameLoop() {
  clearAll();
  player.drawImage();
}

function mainLoop() {
  if (game) {
    if(!init) {
      player.setImage();
      init = true;
    }
    gameLoop();
  }
  animationReq = requestAnimationFrame(mainLoop);
}

function getMousePos(canvas, evt) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

canvas.addEventListener('mousemove', function(evt) {
  let mousePos = getMousePos(canvas, evt);
  player.setDirections(mousePos.x, mousePos.y);

}, false);

canvas.addEventListener('click', function(evt) {
  try {
    loadedSounds[0].play();
  } catch(e) {
    console.log(e);
  }
});

mainLoop();