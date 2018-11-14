// Image Indicators
const PLAYER_INDICATOR = 0;
const SPRITE_INDICATOR = 1;

// Images
const SPRITES = 'images/sprites.png';
const GUN_CURSOR = 'images/gun.png';
const IMAGES = [
  { id: SPRITE_INDICATOR, src : SPRITES },
  { id: PLAYER_INDICATOR, src: GUN_CURSOR }];

// Gun Indicators
const NORMAL_GUN_INDICATOR = 0;
const SHOT_GUN_INDICATOR = 1;


// Sounds
const NORMAL_GUN_SOUND = 'sounds/normal_gun_sound.mp3';
const SHOT_GUN_SOUND = 'sounds/shot_gun_sound.mp3';
const SOUNDS = [
  { id: NORMAL_GUN_INDICATOR, src: NORMAL_GUN_SOUND },
  { id: SHOT_GUN_INDICATOR, src: SHOT_GUN_SOUND },
];


// HEIGHT and WIDTH sectors
const SCREEN_WIDTH = 1000;
const SCREEN_HEIGHT = 600;

const DIMESNSION_GUN = [
  { id: NORMAL_GUN_INDICATOR, width: 60, height: 60},
  { id: SHOT_GUN_INDICATOR, width: 70, height: 70},
]

const loadedImages = {};
const loadedSounds = {};
let game = false;
let init = false;