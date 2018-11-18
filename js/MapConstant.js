// Image Mapper
const IMAGES = [
  { id: SPRITE_INDICATOR, src : SPRITES },
  { id: PLAYER_INDICATOR, src: GUN_CURSOR },
  { id: CLOUD_INDICATOR, src: CLOUD },
  { id: NORMAL_GUN_INDICATOR, src: NORMAL_GUN_IMAGE },
  { id: SHOT_GUN_INDICATOR, src: SHOT_GUN_IMAGE }
];

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

// GUN
const DIMESNSION_GUN = {
  [NORMAL_GUN_INDICATOR]: { width: 60, height: 60, time: 2 },
  [SHOT_GUN_INDICATOR]: { width: 80, height: 80, time: 1.5 },
}

/// MENU POINTER
const POINTER_DIMENSION = [ // S = Start E = End
  {xS: 280, yS: 230, xE: 470, yE: 350, gun_indicator: NORMAL_GUN_INDICATOR, ducks_no: 1 },
  {xS: 500, yS: 230, xE: 740, yE: 350, gun_indicator: SHOT_GUN_INDICATOR, ducks_no: 2 },
  {xS: 425, yS: 420, xE: 545, yE: 470 },
];








// Collision resources
const NORMAL_GUN_COLLISION = {
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



const SHOT_GUN_COLLISION = {
  [RIGHT]: {
    [FLY_UP]: {
      xmin: - 30,
      xmax: 25,
      ymin: - 35,
      ymax: 20,
    },
    [FLY_SAME]: {
      xmin: - 38,
      xmax: 28,
      ymin: - 20,
      ymax: 20,
    }
  },

  [LEFT]: {
    [FLY_UP]: {
      xmin: -30,
      xmax: 15,
      ymin: -35,
      ymax: 25,
    },
    [FLY_SAME]: {
      xmin: - 35,
      xmax: 28,
      ymin: - 15,
      ymax: 30,
    }
  }
}


const DUCK_COLLISION = {
 [NORMAL_GUN_INDICATOR]: NORMAL_GUN_COLLISION,
 [SHOT_GUN_INDICATOR]: SHOT_GUN_COLLISION,
}


// DUCK
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

const DUCK_ANIMATION = [
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
];

const DUCK_ALIVE = getSpriteObject(0, 726, 26, 15, 0, 350, 26, 15);
const DUCK_KILLED = getSpriteObject(0, 711, 26, 15, 0, 350, 26, 15);

const MAP_SPRITE = {
  [GROUND_INDICATOR]: getSpriteObject(195, 0, 790, 200, 0, 350, SCREEN_WIDTH, 250),
  [TREE_INDICATOR]: getSpriteObject(0, 0, 180, 400, 100, 200, 160, 400),
  [DOG_INDICATOR]: DUCK_ANIMATION,
  [DUCK_INDICATOR]: MAP_SPRITE_DUCKS,
  [DUCK_ALIVE_INDICATOR]: DUCK_ALIVE,
  [DUCK_DEAD_INDICATOR]: DUCK_KILLED,
};



