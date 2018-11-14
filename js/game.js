const canvas = document.getElementById('gameContainer');
const ctx = canvas.getContext('2d');

let animationReq;
let animationId = 0;

const spriteRenderer = new SpriteRenderer(ctx);

// Background of the game
let background = new BackGround(ctx);


// Player, Dog and Ducks

const dog = new Dog(ctx);

let player = new Player(ctx);
function clearAll(){
  ctx.clearRect(0, 0 , SCREEN_WIDTH, SCREEN_HEIGHT);
}


function setAllObjectImage() {
  background.setImage();
  player.setImage();
  dog.setImage();
}

function drawAllObject() {
  background.drawSky();
  background.drawTree();
  background.drawGround();
  if(animateDogId <= MAP_SPRITE[DOG_INDICATOR].length ) {
    animateDogWalking();
    dog.drawImage();
  }
  player.drawCursor();
}


function gameLoop() {
  clearAll();
  drawAllObject();
}

function mainLoop() {
  if (game) {
    if(!init) {
      setAllObjectImage();
      init = true;
    }
    gameLoop();
    animationId +=1;
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
    loadedSounds[SHOT_GUN_INDICATOR].play();
  } catch(e) {
    console.log(e);
  }
});

mainLoop();