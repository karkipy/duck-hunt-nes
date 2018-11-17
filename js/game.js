const canvas = document.getElementById('gameContainer');
const ctx = canvas.getContext('2d');

let animationReq;
let animationId = 0;

let playerGun = NORMAL_GUN_INDICATOR;

const spriteRenderer = new SpriteRenderer(ctx); // single object to draw the image

// Background of the game
let background = new BackGround(ctx);
// Draw Menu
let menuObj = new Menu(ctx);


// Player, Dog and Ducks
const dog = new Dog();
let duck = new Duck(ctx, BLACK, RIGHT);


let player = new Player(ctx, playerGun);
function clearAll(){
  ctx.clearRect(0, 0 , SCREEN_WIDTH, SCREEN_HEIGHT);
}


function setAllObjectImage() { // Set Image after all the images are loaded use of single resource
  background.setImage();
  menuObj.setImage();
  player.setImage();
  dog.setImage();
  duck.setImage();
}

function drawBackGround() {
  background.drawSky();
  background.drawTree();
  background.drawGround();
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
  }
  player.drawCursor();
  player.drawBar();
}


function gameLoop() { // game loop of the game
  clearAll();
  drawAllObject();
}

function mainLoop() {
  if(menu) {
    if(!init) {
      setAllObjectImage();
      init = true;

    } else {
      drawBackGround();
      menuObj.drawMenu();
    }
  }
  else if (game) {
    if(!init) {
      setAllObjectImage();
      init = true;

    } else {
      gameLoop();
    }
    animationId +=1;
  }
  animationReq = requestAnimationFrame(mainLoop);
}



mainLoop();


function getMousePos(canvas, evt) { // get mouse positions
  let rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

canvas.addEventListener('mousemove', function(evt) { // cursor
  let mousePos = getMousePos(canvas, evt);
  let { x, y } = mousePos;

  if (menu) {
    if (x >= MENU_XPOS_START && x<= MENU_XPOS_END && y >= MENU_YPOS_START && y <= MENU_YPOS_END) {
      setCursor(mousePos);
    }

  }


  player.setDirections(mousePos.x, mousePos.y);

}, false);

canvas.addEventListener('click', function(evt) { //shoot the damn thing
  try {

    if(menu) {
      let mousePos = getMousePos(canvas, evt);
      let indicator = setPlayerIndicator(mousePos);

      if (indicator === undefined) { // startGame
        game = true;
        menu = false;
      }

      if (indicator === NORMAL_GUN_INDICATOR || indicator === SHOT_GUN_INDICATOR) {
        playerGun = indicator;
        player.updatePlayer(playerGun)
        playAudio(playerGun);
      }

    }

    else if (player.ready && game) {
      let { playerX, playerY, playerRadius} = player.getDimensions();
      let duckaDimension = duck.getAllDimensions();
      let { x, y, width, height } = duckaDimension;
      let { xmin, xmax, ymin, ymax } = DUCK_COLLISION[SHOT_GUN_INDICATOR][duck.duckDirection][duck.duckMovement];

      if(y + ymin <= playerY && y + ymax >= playerY) {
        if(x + xmin <= playerX && x + xmax >= playerX)
        {
          duck.death();
        }
      }
      player.gunShot();
    }
  } catch(e) {
    console.log(e);
  }
});
