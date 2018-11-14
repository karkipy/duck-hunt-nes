const STANDARD_FRAME = 60;

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
const START_GAME_INDICATOR = 2;


// Sounds
const NORMAL_GUN_SOUND = 'sounds/normal_gun_sound.mp3';
const SHOT_GUN_SOUND = 'sounds/shot_gun_sound.mp3';
const START_GAME_SOUND = 'sounds/grab_intro.mp3';

// Register All Sounds
const SOUNDS = [
  { id: NORMAL_GUN_INDICATOR, src: NORMAL_GUN_SOUND },
  { id: SHOT_GUN_INDICATOR, src: SHOT_GUN_SOUND },
  { id: START_GAME_INDICATOR, src: START_GAME_SOUND },
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


// Dog resources
const DOG_WIDTH = 170;
const DOG_HEIGHT = 150;
const DOG_WIDTH_FLY = 140;

const DOG_SOURCE_WIDTH = 108;
const DOG_SOURCE_HEIGHT = 100;
const DOG_SOURCE_WIDTH_FLY = 80;


const DOG_GROUND_Y = 430;
const DOG_GROUND_Y_SKY = 400;
const DOG_GROUND_Y_MAX = 300;
const DOG_GROUND_Y_MIN = 320;
const DOG_GROUND_Y_FLY = 380;
const DOG_POS = 0;
const DOG_SPACING = 50;
const DOG_SOURCE_X = 194;
const DOG_SOURCE_Y = 210;

const DOG_GROUND = [];

for(let i = 0; i< 8; i+= 1) {
  DOG_GROUND.push({
    sourceX: DOG_SOURCE_X + DOG_SOURCE_WIDTH * i,
    sourceY: DOG_SOURCE_Y,
    sourceWidth: DOG_SOURCE_WIDTH,
    sourceHeight: DOG_SOURCE_HEIGHT,
    placeX: DOG_POS + DOG_SPACING * i,
    placeY: DOG_GROUND_Y,
    width: DOG_WIDTH,
    height: DOG_HEIGHT,
  });
}


// Image Map Resources
const GROUND_INDICATOR = 0;
const TREE_INDICATOR = 1;
const DOG_INDICATOR = 2;

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
  [TREE_INDICATOR]: {
    sourceX: 0,
    sourceY: 0,
    sourceWidth: 180,
    sourceHeight: 400,
    placeX: 100,
    placeY: 200,
    width: 160,
    height: 400,
  },
  [DOG_INDICATOR]: [
    {
      sourceX: DOG_SOURCE_X,
      sourceY: DOG_SOURCE_Y,
      sourceWidth: DOG_SOURCE_WIDTH,
      sourceHeight: DOG_SOURCE_HEIGHT,
      placeX: DOG_POS,
      placeY: DOG_GROUND_Y,
      width: DOG_WIDTH,
      height: DOG_HEIGHT,
    },
    {
      sourceX: DOG_SOURCE_X + DOG_SOURCE_WIDTH,
      sourceY: DOG_SOURCE_Y,
      sourceWidth: DOG_SOURCE_WIDTH,
      sourceHeight: DOG_SOURCE_HEIGHT,
      placeX: DOG_POS + DOG_SPACING,
      placeY: DOG_GROUND_Y,
      width: DOG_WIDTH,
      height: DOG_HEIGHT,
    },

    {
      sourceX: DOG_SOURCE_X + DOG_SOURCE_WIDTH * 2,
      sourceY: DOG_SOURCE_Y,
      sourceWidth: DOG_SOURCE_WIDTH,
      sourceHeight: DOG_SOURCE_HEIGHT,
      placeX: DOG_POS + DOG_SPACING * 2,
      placeY: DOG_GROUND_Y,
      width: DOG_WIDTH,
      height: DOG_HEIGHT,
    },
    {
      sourceX: DOG_SOURCE_X + DOG_SOURCE_WIDTH * 3,
      sourceY: DOG_SOURCE_Y,
      sourceWidth: DOG_SOURCE_WIDTH,
      sourceHeight: DOG_SOURCE_HEIGHT,
      placeX: DOG_POS + DOG_SPACING * 3,
      placeY: DOG_GROUND_Y,
      width: DOG_WIDTH,
      height: DOG_HEIGHT,
    },
    {
      sourceX: DOG_SOURCE_X + DOG_SOURCE_WIDTH * 4,
      sourceY: DOG_SOURCE_Y,
      sourceWidth: DOG_SOURCE_WIDTH,
      sourceHeight: DOG_SOURCE_HEIGHT,
      placeX: DOG_POS + DOG_SPACING * 4,
      placeY: DOG_GROUND_Y,
      width: DOG_WIDTH,
      height: DOG_HEIGHT,
    },
    {
      sourceX: DOG_SOURCE_X + DOG_SOURCE_WIDTH * 5,
      sourceY: DOG_SOURCE_Y,
      sourceWidth: DOG_SOURCE_WIDTH,
      sourceHeight: DOG_SOURCE_HEIGHT,
      placeX: DOG_POS + DOG_SPACING * 4,
      placeY: DOG_GROUND_Y + 10,
      width: DOG_WIDTH,
      height: DOG_HEIGHT,
    },
    {
      sourceX: DOG_SOURCE_X + DOG_SOURCE_WIDTH * 6,
      sourceY: DOG_SOURCE_Y,
      sourceWidth: DOG_SOURCE_WIDTH_FLY,
      sourceHeight: DOG_SOURCE_HEIGHT,
      placeX: DOG_POS + DOG_SPACING * 5,
      placeY: DOG_GROUND_Y_FLY,
      width: DOG_WIDTH_FLY,
      height: DOG_HEIGHT,
    },
    {
      sourceX: DOG_SOURCE_X + DOG_SOURCE_WIDTH * 6.7,
      sourceY: DOG_SOURCE_Y,
      sourceWidth: DOG_SOURCE_WIDTH_FLY,
      sourceHeight: DOG_SOURCE_HEIGHT,
      placeX: DOG_POS + DOG_SPACING * 7,
      placeY: DOG_GROUND_Y_MAX,
      width: DOG_WIDTH_FLY,
      height: DOG_HEIGHT,
    },
  ],
};

// Animation resources
const DOG_ANIMATION_SEQUENCE = 45;


// Game resources
const loadedImages = {};
const loadedSounds = {};
let game = false;
let init = false;
let animateDogId = 0;