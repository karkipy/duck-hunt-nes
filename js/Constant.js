const STANDARD_FRAME = 60;

// HEIGHT and WIDTH sectors
const SCREEN_WIDTH = 1000;
const SCREEN_HEIGHT = 600;

// Menu
const MENU_WIDTH = 800;
const MENU_HEIGHT = 550;
const MENU_XPOS_START = (SCREEN_WIDTH - MENU_WIDTH) / 2;
const MENU_YPOS_START = (SCREEN_HEIGHT - MENU_HEIGHT) / 2;
const MENU_XPOS_END = MENU_XPOS_START + MENU_WIDTH;
const MENU_YPOS_END = MENU_YPOS_START + MENU_HEIGHT;


// Images
const SPRITES = 'images/sprites.png';
const GUN_CURSOR = 'images/cursor.png';
const CLOUD = 'images/cloud.png';
const NORMAL_GUN_IMAGE = 'images/normal_gun.png';
const SHOT_GUN_IMAGE = 'images/shot_gun.png';
const NUKE_IMAGE = 'images/nuke_assets.png';


// Sounds
const NORMAL_GUN_SOUND = 'sounds/normal_gun_sound.mp3';
const SHOT_GUN_SOUND = 'sounds/shot_gun_sound.mp3';
const START_GAME_SOUND = 'sounds/grab_intro.mp3';
const DUCK_FLAP_SOUND = 'sounds/grab_flap.mp3';
const DUCK_QUACK_SOUND = 'sounds/quack.mp3';
const DUCK_FALL_SOUND = 'sounds/duckFall.mp3';
const DUCK_LAND_SOUND = 'sounds/duckLand.mp3';
const DUCK_CAUGHT_SOUND = 'sounds/duck_caught.mp3';
const DOG_BARK_SOUND = 'sounds/bark.mp3';
const NUKE_SOUND = 'sounds/nuke_sound.mp3';




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
const DOG_SPACING = 10;
const DOG_SOURCE_X = 194;
const DOG_SOURCE_Y = 210;



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



// Animation resources
const DOG_ANIMATION_SEQUENCE = 12; // reset to 12
const DUCK_ANIMATION_SEQUENCE = 8;
const DUCK_RESPAWN = 12;
const DUCK_CAUGHT_SEQUENCE = 5;
const DUCK_LAND_HEIGHT = 380;
const DUCK_CAUGHT_HEIGHT = 380;


