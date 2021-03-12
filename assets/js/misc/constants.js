export const WIDTH = 320;
export const HEIGHT = 180;
export const SPRITESHEET = './assets/img/spritesheet.png';
export const TILE_SIZE = 16;
export var GameState;
(function (GameState) {
    GameState[GameState["INITIALIZING"] = 0] = "INITIALIZING";
    GameState[GameState["MAINMENU"] = 1] = "MAINMENU";
    GameState[GameState["PLAY"] = 2] = "PLAY";
    GameState[GameState["CUTSCENE"] = 3] = "CUTSCENE";
    GameState[GameState["PAUSEMENU"] = 4] = "PAUSEMENU";
    GameState[GameState["ENDING"] = 5] = "ENDING";
})(GameState || (GameState = {}));
;
