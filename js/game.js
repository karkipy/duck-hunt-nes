const canvas = document.getElementById('gameContainer');
const ctx = canvas.getContext('2d');

let animationReq;
let animationId = 0;

const spriteRenderer = new SpriteRenderer(ctx); // single object to draw the image

// Background of the game
let background = new BackGround(ctx);


// Player, Dog and Ducks

const dog = new Dog();
let duck = new Duck(ctx, BLACK, LEFT);


let player = new Player(ctx);
function clearAll(){
  ctx.clearRect(0, 0 , SCREEN_WIDTH, SCREEN_HEIGHT);
}


function setAllObjectImage() { // Set Image after all the images are loaded use of single resource
  background.setImage();
  player.setImage();
  dog.setImage();
  duck.setImage();

}

function drawAllObject() { // draw all the object here
  background.drawSky();

  // Duck and dog later are to be drawn before tree and ground



  if(animateDogId <= MAP_SPRITE[DOG_INDICATOR].length ) { // call animation logic
    background.drawTree();
    background.drawGround();
    animateDogWalking();
    dog.drawImage();
  } else {
    duck.drawImage();
    background.drawTree();
    background.drawGround();
    // duckb.drawImage();
    ctx.fillStyle = 'black';
    ctx.fillRect(800, 350, 5, 70);
  }
  player.drawCursor();
  player.drawBar();
}


function gameLoop() { // game loop of the game
  clearAll();
  drawAllObject();
}

function mainLoop() {
  if (game) {
    if(!init) {
      setAllObjectImage();
      init = true;
      // playAudio(loadedSounds, START_GAME_INDICATOR);
    }
    gameLoop();
    animationId +=1;
  }
  animationReq = requestAnimationFrame(mainLoop);
}

function getMousePos(canvas, evt) { // get mouse positions
  let rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

canvas.addEventListener('mousemove', function(evt) { // cursor
  let mousePos = getMousePos(canvas, evt);
  player.setDirections(mousePos.x, mousePos.y);

}, false);

canvas.addEventListener('click', function(evt) { //shoot the damn thing
  try {
    if (player.ready) {
      let { playerX, playerY, playerRadius} = player.getDimensions();
      let duckaDimension = duck.getAllDimensions();
      let { x, y, width, height } = duckaDimension;
      let { xmin, xmax, ymin, ymax } = COLLISION[duck.duckDirection][duck.duckMovement];

      if(y + ymin <= playerY && y + ymax >= playerY) {
        if(x + xmin <= playerX && x + xmax >= playerX)
        {
          duck.death();
        }
      }
      loadedSounds[NORMAL_GUN_INDICATOR].play();
      player.gunShot();
      player.ready = false;
    }
  } catch(e) {
    console.log(e);
  }
});


mainLoop();