// Image Indicators
const PLAYER_INDICATOR = 0;
const SPRITE_INDICATOR = 1;

// Images
const SPRITES = 'images/sprites.png';
const GUN_CURSOR = 'images/gun.png';
const IMAGES = [
  { id: SPRITE_INDICATOR, src : SPRITES },
  { id: PLAYER_INDICATOR, src: GUN_CURSOR }];

// Sound Indicators
const GUN_SHOT_INDICATOR = 0;


// Sounds
const GUN_SHOT = 'sounds/shot_gun.mp3';
const SOUNDS = [
  {id : GUN_SHOT_INDICATOR, src: GUN_SHOT },
];


// HEIGHT and WIDTH sectors
const SCREEN_WIDTH = 1000;
const SCREEN_HEIGHT = 600;

const CURSOR_WIDTH = 60;
const CURSOR_HEIGHT = 60;

const loadedImages = {};
const loadedSounds = {};
let game = false;
let init = false;