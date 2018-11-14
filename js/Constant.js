// Image Indicators
const PLAYER_INDICATOR = 0;
const SPRITE_INDICATOR = 1;
const CLOUD_INDICATOR = 2;

// Images
const SPRITES = 'images/sprites.png';
const GUN_CURSOR = 'images/gun.png';
const CLOUD = 'images/cloud.png';

const IMAGES = [
  { id: SPRITE_INDICATOR, src : SPRITES },
  { id: PLAYER_INDICATOR, src: GUN_CURSOR },
  { id: CLOUD_INDICATOR, src: CLOUD },
];

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

const GUN_RESET = 1;


// Cloud
const CLOUD_POSITION = [];
const CLOUD_HEIGHT = 50;
const CLOUD_WIDTH = 80;
const CLOUD_SPACING = 2;
const ROW = 2;
const COLUMN = 5;
const ROW_INITALPOS = [50, 130];
const COLUMN_INITIALPOS = [110, 160];


// Background resources
const SKY_COLOR = '#00bfff';

// Image Map Resources
const GROUND_INDICATOR = 0;

const MAP_SPRITE = {
  [GROUND_INDICATOR]: {
    sourceX: 195,
    sourceY: 0,
    sourceWidth: 790,
    sourceHeight: 200,
    placeX: 0,
    placeY: 350,
    width: SCREEN_WIDTH,
    height: 250,
  },
};

// Game resources
const loadedImages = {};
const loadedSounds = {};
let game = false;
let init = false;