// Game resources
const loadedImages = {};
const loadedSounds = {};
let game = false;
let init = false;
let menu = false;
let gameOver = false;
let animateDogId = 0;
let playerGun = NORMAL_GUN_INDICATOR;
let number_of_ducks = 1; // default
let animationReq;
let animationId = 0;
let respawnId = 0;
