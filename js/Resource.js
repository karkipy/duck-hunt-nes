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


const totalWaves = 10;
let currentWave = 0;
let waveType = 1; // how manu ducks to populate  1 or 2
let ducks = []// default one
let totalDucks = 0; // total ducks
let ducksKilled = 0;
let animateLastDuck = true;

let nukeAnimation = false;