const canvas = document.getElementById('gameContainer');
const ctx = canvas.getContext('2d');

let animationReq;

// Background of the game
let background = new BackGround(ctx);


// Player and Ducks

let player = new Player(ctx);
function clearAll(){
  ctx.clearRect(0, 0 , SCREEN_WIDTH, SCREEN_HEIGHT);
}



function gameLoop() {
  clearAll();
  background.drawSky();
  background.drawGround();
  player.drawImage();
}

function mainLoop() {
  if (game) {
    if(!init) {
      background.setImage();
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