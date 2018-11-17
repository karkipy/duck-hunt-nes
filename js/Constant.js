const STANDARD_FRAME = 60;

// HEIGHT and WIDTH sectors
const SCREEN_WIDTH = 1000;
const SCREEN_HEIGHT = 600;

// Menu
const MENU_WIDTH = 800;
const MENU_HEIGHT = 550;



//Gun Indicators
const NORMAL_GUN_INDICATOR = 111;
const SHOT_GUN_INDICATOR = 1111;

// Image Indicators
const PLAYER_INDICATOR = 0;
const SPRITE_INDICATOR = 1;
const CLOUD_INDICATOR = 2;

// Images
const SPRITES = 'images/sprites.png';
const GUN_CURSOR = 'images/cursor.png';
const CLOUD = 'images/cloud.png';
const NORMAL_GUN_IMAGE = 'images/normal_gun.png';
const SHOT_GUN_IMAGE = 'images/shot_gun.png';

const IMAGES = [
  { id: SPRITE_INDICATOR, src : SPRITES },
  { id: PLAYER_INDICATOR, src: GUN_CURSOR },
  { id: CLOUD_INDICATOR, src: CLOUD },
  { id: NORMAL_GUN_INDICATOR, src: NORMAL_GUN_IMAGE },
  { id: SHOT_GUN_INDICATOR, src: SHOT_GUN_IMAGE }
];

// Sound Indicators
const START_GAME_INDICATOR = 2;
const DUCK_FLAP_INDICATOR = 3;
const DUCK_QUACK_INDICATOR = 4;
const DUCK_FALL_INDICATOR = 5;
const DUCK_LAND_INDICATOR = 6;


// Sounds
const NORMAL_GUN_SOUND = 'sounds/normal_gun_sound.mp3';
const SHOT_GUN_SOUND = 'sounds/shot_gun_sound.mp3';
const START_GAME_SOUND = 'sounds/grab_intro.mp3';
const DUCK_FLAP_SOUND = 'sounds/grab_flap.mp3';
const DUCK_QUACK_SOUND = 'sounds/quack.mp3';
const DUCK_FALL_SOUND = 'sounds/duckFall.mp3';
const DUCK_LAND_SOUND = 'sounds/duckLand.mp3';


// Register All Sounds
const SOUNDS = [
  { id: NORMAL_GUN_INDICATOR, src: NORMAL_GUN_SOUND },
  { id: SHOT_GUN_INDICATOR, src: SHOT_GUN_SOUND },
  { id: START_GAME_INDICATOR, src: START_GAME_SOUND },
  { id: DUCK_FLAP_INDICATOR, src: DUCK_FLAP_SOUND },
  { id: DUCK_QUACK_INDICATOR, src: DUCK_QUACK_SOUND },
  { id: DUCK_FALL_INDICATOR, src: DUCK_FALL_SOUND },
  { id: DUCK_LAND_INDICATOR, src: DUCK_LAND_SOUND },
];





const DIMESNSION_GUN = {
  [NORMAL_GUN_INDICATOR]: { width: 60, height: 60 },
  [SHOT_GUN_INDICATOR]: { width: 75, height: 75},
}

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

const RED = 'RED';
const BLACK = 'BLACK';

const LEFT = 'LEFT';
const RIGHT = 'RIGHT';

const FLY_UP = 'FLY_UP';
const FLY_SAME = 'FLY_SAME';

const DUCK_DEATH = 'DEATH';
const DUCK_DROP = 'DUCK_DROP';

const DUCK_TYPES = [BLACK, RED];
const DUCK_DIRECTION = [LEFT, RIGHT]
const DUCK_MOVEMENT = [FLY_UP, FLY_SAME];


const BLACK_DUCK_MAP = {
  [LEFT]: {
    [FLY_UP]: [
      getSpriteObject(0, 420, 60, 70, 100, 100, 70, 70),
      getSpriteObject(70, 420, 60, 70, 180, 100, 70, 70),
      getSpriteObject(132, 420, 60, 70, 250, 100, 70, 70),
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

  [DUCK_DEATH]: getSpriteObject(195 + 80 * 3, 420, 65, 70, 450,300, 70, 70),

  [DUCK_DROP]: [
    getSpriteObject(195 + 80 * 3 + 65 , 420, 50, 80, 520,300, 55, 80),
    getSpriteObject(195 + 80 * 3 + 110, 420, 50, 80, 570,100, 55, 80),
  ],
};


const RED_DUCK_MAP = {
  [LEFT]: {
    [FLY_UP]: [
      getSpriteObject(0, 570, 60, 70, 100, 100, 70, 70),
      getSpriteObject(70, 570, 60, 70, 180, 100, 70, 70),
      getSpriteObject(130, 570, 60, 70, 250, 100, 70, 70),
    ],
    [FLY_SAME]: [
      getSpriteObject(195, 570, 70, 70, 200, 200, 70, 70),
      getSpriteObject(195 + 80, 570, 70, 70, 300, 200, 70, 70),
      getSpriteObject(195 + 80 * 2 , 570, 70, 70, 400, 200, 70, 70),
    ],
  },

  [RIGHT]: {
    [FLY_UP]: [
      getSpriteObject(0, 640, 65, 70, 300, 300, 70, 70),
      getSpriteObject(67, 640, 65, 70, 450, 300, 70, 70),
      getSpriteObject(130, 640, 65, 70, 550, 300, 70, 70),
    ],
    [FLY_SAME]: [
      getSpriteObject(195, 640, 65, 70, 300, 400, 70, 70),
      getSpriteObject(195 + 80, 640, 65, 70, 450, 400, 70, 70),
      getSpriteObject(195 + 80 * 2, 640, 65, 70, 550, 400, 70, 70),
    ],
  },

  [DUCK_DEATH]: getSpriteObject(195 + 80 * 3, 570, 65, 70, 450,300, 70, 70),
  [DUCK_DROP]: [
    getSpriteObject(195 + 80 * 3 + 65 , 565, 50, 80, 520,300, 55, 80),
    getSpriteObject(195 + 80 * 3 + 110, 565, 50, 80, 570,100, 55, 80),
  ],


}

const MAP_SPRITE_DUCKS = {
  [DUCK_TYPES[DUCK_BLACK]]: BLACK_DUCK_MAP,
  [DUCK_TYPES[DUCK_RED]]: RED_DUCK_MAP,
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

// Collision resources
const COLLISION = {
  [RIGHT]: {
    [FLY_UP]: {
      xmin: - 10,
      xmax: 30,
      ymin: - 25,
      ymax: 30,
    },
    [FLY_SAME]: {
      xmin: - 25,
      xmax: 40,
      ymin: - 10,
      ymax: 30,
    },
  },
  [LEFT]: {
    [FLY_UP]: {
      xmin: - 15,
      xmax: 25,
      ymin: - 25,
      ymax: 30,
    },
    [FLY_SAME]:{
      xmin: - 30,
      xmax: 35,
      ymin: - 10,
      ymax: 30,
    },
  },
}

// Animation resources
const DOG_ANIMATION_SEQUENCE = 12;
const DUCK_ANIMATION_SEQUENCE = 8;