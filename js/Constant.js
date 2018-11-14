function getSpriteObject(sx, sy, sw, sh, dx, dy, dw, dh) {
  return {
    sourceX: sx,
    sourceY: sy,
    sourceWidth: sw,
    sourceHeight: sh,
    placeX: dx,
    placeY: dy,
    width: dw,
    height: dh,
  }
}


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



// Image Map Resources
const GROUND_INDICATOR = 0;
const TREE_INDICATOR = 1;
const DOG_INDICATOR = 2;
const DUCK_INDICATOR = 3;

// Duck Resources
const DUCK_BLACK = 0;
const DUCK_RED = 1;
const BLACK = 'BLACK';
const RED = 'RED';
const DUCK_TYPES = [BLACK, RED];
const LEFT = 'LEFT';
const RIGHT = 'RIGHT';
const FLY_UP = 'FLY_UP';
const FLY_SAME = 'FLY_SAME';
const DUCK_DEATH = 'DEATH';
const DUCK_DROP = 'DUCK_DROP';


const MAP_SPRITE_DUCKS = {
  [DUCK_TYPES[DUCK_BLACK]]: {
    [LEFT]: {
      [FLY_UP]: [
        getSpriteObject(0, 420, 60, 70, 100, 100, 70, 70),
        getSpriteObject(70, 420, 60, 70, 180, 100, 70, 70),
        getSpriteObject(130, 420, 60, 70, 250, 100, 70, 70),
      ],
      [FLY_SAME]: [
        getSpriteObject(195, 420, 70, 70, 200, 200, 70, 70),
        getSpriteObject(195 + 80, 420, 70, 70, 300, 200, 70, 70),
        getSpriteObject(195 + 80 * 2 , 420, 70, 70, 400, 200, 70, 70),
      ],
    },

    [RIGHT]: {
      [FLY_UP]: [
        getSpriteObject(0, 500, 65, 70, 300, 300, 70, 70),
        getSpriteObject(67, 500, 65, 70, 450, 300, 70, 70),
        getSpriteObject(130, 500, 65, 70, 550, 300, 70, 70),
      ],
      [FLY_SAME]: [
        getSpriteObject(195, 500, 65, 70, 300, 400, 70, 70),
        getSpriteObject(195 + 80, 500, 65, 70, 450, 400, 70, 70),
        getSpriteObject(195 + 80 * 2, 500, 65, 70, 550, 400, 70, 70),
      ],
    },

    [DUCK_DEATH]: getSpriteObject(),

    [DUCK_DROP]: [],
  },
  [DUCK_TYPES[DUCK_RED]]: {

  }
};

const MAP_SPRITE = {
  [GROUND_INDICATOR]: getSpriteObject(195, 0, 790, 200, 0, 350, SCREEN_WIDTH, 250),
  [TREE_INDICATOR]: getSpriteObject(0, 0, 180, 400, 100, 200, 160, 400),
  [DOG_INDICATOR]: [
    getSpriteObject(
      DOG_SOURCE_X,
      DOG_SOURCE_Y,
      DOG_SOURCE_WIDTH,
      DOG_SOURCE_HEIGHT,
      DOG_POS,
      DOG_GROUND_Y,
      DOG_WIDTH,
      DOG_HEIGHT),

    getSpriteObject(
      DOG_SOURCE_X + DOG_SOURCE_WIDTH,
      DOG_SOURCE_Y,
      DOG_SOURCE_WIDTH,
      DOG_SOURCE_HEIGHT,
      DOG_POS + DOG_SPACING,
      DOG_GROUND_Y,
      DOG_WIDTH,
      DOG_HEIGHT),

    getSpriteObject(
      DOG_SOURCE_X + DOG_SOURCE_WIDTH * 2,
      DOG_SOURCE_Y,
      DOG_SOURCE_WIDTH,
      DOG_SOURCE_HEIGHT,
      DOG_POS + DOG_SPACING * 2,
      DOG_GROUND_Y,
      DOG_WIDTH,
      DOG_HEIGHT,
    ),

    getSpriteObject(
     DOG_SOURCE_X + DOG_SOURCE_WIDTH * 3,
      DOG_SOURCE_Y,
      DOG_SOURCE_WIDTH,
      DOG_SOURCE_HEIGHT,
      DOG_POS + DOG_SPACING * 3,
      DOG_GROUND_Y,
      DOG_WIDTH,
      DOG_HEIGHT,
    ),
    getSpriteObject(
     DOG_SOURCE_X + DOG_SOURCE_WIDTH * 4,
      DOG_SOURCE_Y,
      DOG_SOURCE_WIDTH,
      DOG_SOURCE_HEIGHT,
      DOG_POS + DOG_SPACING * 4,
      DOG_GROUND_Y,
      DOG_WIDTH,
      DOG_HEIGHT,
    ),
    getSpriteObject(
     DOG_SOURCE_X + DOG_SOURCE_WIDTH * 5,
      DOG_SOURCE_Y,
      DOG_SOURCE_WIDTH,
      DOG_SOURCE_HEIGHT,
      DOG_POS + DOG_SPACING * 4,
      DOG_GROUND_Y + 10,
      DOG_WIDTH,
      DOG_HEIGHT,
    ),
    getSpriteObject(
     DOG_SOURCE_X + DOG_SOURCE_WIDTH * 6,
      DOG_SOURCE_Y,
      DOG_SOURCE_WIDTH_FLY,
      DOG_SOURCE_HEIGHT,
      DOG_POS + DOG_SPACING * 5,
      DOG_GROUND_Y_FLY,
      DOG_WIDTH_FLY,
      DOG_HEIGHT,
    ),
    getSpriteObject(
     DOG_SOURCE_X + DOG_SOURCE_WIDTH * 6.7,
      DOG_SOURCE_Y,
      DOG_SOURCE_WIDTH_FLY,
      DOG_SOURCE_HEIGHT,
      DOG_POS + DOG_SPACING * 7,
      DOG_GROUND_Y_MAX,
      DOG_WIDTH_FLY,
      DOG_HEIGHT,
    ),
  ],
  [DUCK_INDICATOR]: MAP_SPRITE_DUCKS,
};

// Animation resources
const DOG_ANIMATION_SEQUENCE = 45;


// Game resources
const loadedImages = {};
const loadedSounds = {};
let game = false;
let init = false;
let animateDogId = 0;