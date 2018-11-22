const canvas = document.getElementById('gameContainer');
const ctx = canvas.getContext('2d');

// single object to draw the image
const spriteRenderer = new SpriteRenderer(ctx);
// Background of the game
let background = new BackGround(ctx);
// Draw Menu
let menuObj = new Menu(ctx);

// Score object
let score = new Score(ctx);

// game over object
let gameOverObj = new GameOver(ctx);


// Player, Dog and Ducks
const dog = new Dog();
dog.setDimensionsDuck(1); // which type of duck to be catched 1 or 2


let player = new Player(ctx, playerGun);
let randomColor;
let randomDirection;

function clearAll(){
  ctx.clearRect(0, 0 , SCREEN_WIDTH, SCREEN_HEIGHT);
}


function randomizeColorDirection(c = Math.round(Math.random()), d = Math.round(Math.random())) {
  randomColor = DUCK_TYPES[[c + 1] % DUCK_TYPES.length ];
  randomDirection = DUCK_DIRECTION[[d + 1] % DUCK_DIRECTION.length];
}


function resetWholeGame() {
  menu = true;
  game = false;
  gameOver = false;
  duck=  [];
  animateLastDuck= true;
  score.ducksKilled = 0;
  animateDogId = 0;
  animationId = 0;
  dog.reset();
}


function populateDucks(number) {
  totalDucks = number * 10;
  score.setTotalDucks(totalDucks);
  waveType = number;
  randomizeColorDirection();
  if(number === 1) {
    ducks.push(new Duck(ctx, randomColor, randomDirection));
  } else {
    randomizeColorDirection();
    ducks.push(new Duck(ctx, randomColor, randomDirection));
    randomizeColorDirection(DUCK_TYPES.indexOf(randomColor), DUCK_DIRECTION.indexOf(randomDirection));
    ducks.push(new Duck(ctx, randomColor, randomDirection));
  }
  ducks.forEach(d => { // set Image here for ducks as it is initalized later on
    d.setImage();
  });
}


function checkForRespawn() {
  let died = ducks.filter(d => d.dead).length;
  let landed = ducks.filter(d => d.reset).length;
  if(died === waveType && landed === waveType) {
    if (animationId % 60 === 0) {
      currentWave +=1;
      if (currentWave > totalWaves) {
        if (animateLastDuck) {
          dog.setShow();
          let something  =  animateDogCatchingDuckLast();
          animateLastDuck = something;
        } else {
          dog.resetAnimation();
          game = false;
          gameOver = true;
        }
        // gameOver = true;
        // game = false;
      } else {
        dog.setShow();
        ducks.forEach(d => {
          randomizeColorDirection(DUCK_TYPES.indexOf(randomColor),DUCK_DIRECTION.indexOf(randomDirection) );
          d.duckRespawn(randomColor, randomDirection);
        });
      }
    }
  }
}

function setAllObjectImage() { // Set Image after all the images are loaded use of single resource
  background.setImage();
  menuObj.setImage();
  player.setImage();
  dog.setImage();
  score.setImage();
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
    playAudio(START_GAME_INDICATOR);
    animateDogWalking();
    dog.drawImage();
  } else {

    if (game) {
      checkForRespawn();
      if(dog.show) {
        animateDogCatchingDuck();
      } else {
        ducks.forEach(d => {
          d.drawImage();
        });
      }
    }

    if(gameOver) {

      gameOverObj.drawMenu();

    }

    background.drawTree();
    background.drawGround();
    score.drawDucks();
    if (game) {
      player.drawCursor();
      player.drawBar();
    }


  }
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
  else if (game || gameOver) {
    if(!init) {
      populateDucks(1);
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
  if(game) {
    player.setDirections(mousePos.x, mousePos.y);
  }

  if(gameOver) {
    setGameOverCursor(mousePos);
  }

}, false);

canvas.addEventListener('click', function(evt) { //shoot the damn thing
  try {

    if(menu) {
      let mousePos = getMousePos(canvas, evt);
      let { gun_indicator, ducks_no } = getIndicatorAndDuck(mousePos);
      if (gun_indicator === undefined) { // startGame
        game = true;
        menu = false;
        removeCursor();
        ducks = [];
        populateDucks(waveType);
        currentWave = 1;
      }

      if (gun_indicator === NORMAL_GUN_INDICATOR || gun_indicator === SHOT_GUN_INDICATOR) {
        playerGun = gun_indicator;
        ducks = [];
        waveType = ducks_no;
        playAudio(playerGun);
        populateDucks(waveType);
        dog.setDimensionsDuck(waveType);
        player.updatePlayer(playerGun)
      }

    }

    else if (player.ready && game) {
      let { playerX, playerY, playerRadius} = player.getDimensions();
      ducks.forEach((d, idx) =>{
        let { x, y, width, height } = d.getAllDimensions();;
        let { xmin, xmax, ymin, ymax } = DUCK_COLLISION[SHOT_GUN_INDICATOR][d.duckDirection][d.duckMovement];
        if(y + ymin <= playerY && y + ymax >= playerY) {
          if(x + xmin <= playerX && x + xmax >= playerX)
          {
            if(!d.dead) {
              ducksKilled +=1;
              score.setDucksKilled();
              dog.setXYPOS(x, y);
            }
            d.death();
          }
        }
      })

      player.gunShot();
    }

    else if(gameOver) {
      let mousePos = getMousePos(canvas, evt);
      if (getGameOverRes(mousePos)) {
        resetWholeGame();
      }
    }

  } catch(e) {
    console.log(e);
  }
});
