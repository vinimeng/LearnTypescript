var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Player from './player.js';
import Spritesheet from './spritesheet.js';
import World from './world.js';
var GameState;
(function (GameState) {
    GameState[GameState["INITIALIZING"] = 0] = "INITIALIZING";
    GameState[GameState["MAINMENU"] = 1] = "MAINMENU";
    GameState[GameState["PLAY"] = 2] = "PLAY";
    GameState[GameState["CUTSCENE"] = 3] = "CUTSCENE";
    GameState[GameState["PAUSEMENU"] = 4] = "PAUSEMENU";
    GameState[GameState["ENDING"] = 5] = "ENDING";
})(GameState || (GameState = {}));
;
export default class Game {
    constructor(name) {
        this.entities = [];
        this.tiles = [];
        this.spritesheet = new Spritesheet();
        this.spritesheetLoaded = false;
        this.loadSpritesheet('./img/0x72_16x16DungeonTileset.v3.png');
        this.appDiv = document.getElementById("app");
        this.canvas = document.getElementById("canvas");
        this.context2D = this.canvas.getContext('2d');
        this.fpsCounter = document.getElementById("fpsCounter");
        this.name = name;
        this.width = 320;
        this.height = 180;
        this.scale = this.determineScale();
        this.state = GameState.PLAY;
        this.isRunning = false;
    }
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            this.initializeEvents();
            this.adjustCanvas();
            this.run();
        });
    }
    tick() {
        this.entities.forEach((entity, index) => {
            entity.tick();
        });
    }
    render() {
        this.tiles.forEach((tiles, index) => {
            tiles.render(this.context2D);
        });
        this.entities.forEach((entity, index) => {
            entity.render(this.context2D);
        });
    }
    run() {
        let self = this;
        let frames = 0;
        let timer = Date.now();
        function loop(now) {
            self.tick();
            self.render();
            frames++;
            if (Date.now() - timer > 1000) {
                self.fpsCounter.innerText = `FPS: ${frames}`;
                frames = 0;
                timer += 1000;
            }
            if (self.isRunning) {
                window.requestAnimationFrame(loop);
            }
        }
        this.isRunning = true;
        window.requestAnimationFrame(loop);
    }
    adjustCanvas() {
        this.canvas.width = this.width * this.scale;
        this.canvas.height = this.height * this.scale;
        this.context2D.fillStyle = 'black';
        this.context2D.fillRect(0, 0, this.width * this.scale, this.height * this.scale);
        this.context2D.scale(this.scale, this.scale);
        this.context2D.imageSmoothingEnabled = false;
    }
    determineScale() {
        const divWidth = this.appDiv.offsetWidth;
        const divHeight = this.appDiv.offsetHeight;
        let finalScale = divWidth / this.width;
        if (finalScale >= 1) {
            finalScale = Math.floor(finalScale);
            if (this.width * finalScale > divWidth
                || this.height * finalScale > divHeight) {
                finalScale = finalScale - 1;
            }
        }
        if (finalScale < 1 && finalScale >= 0.75) {
            finalScale = 0.75;
        }
        else if (finalScale < 0.75 && finalScale >= 0.5) {
            finalScale = 0.5;
        }
        else if (finalScale < 0.5) {
            finalScale = 0.25;
        }
        return finalScale;
    }
    initializeEvents() {
        let self = this;
        window.addEventListener('resize', function () {
            self.scale = self.determineScale();
            self.adjustCanvas();
        });
    }
    loadSpritesheet(img) {
        return __awaiter(this, void 0, void 0, function* () {
            this.spritesheetLoaded = (yield this.spritesheet.setSpritesheet(img));
            if (this.spritesheetLoaded !== true) {
                this.spritesheetLoaded = false;
            }
            if (this.spritesheetLoaded) {
                const spritePlayer = yield this.spritesheet.getSprite(80, 144, 16, 16);
                this.player = new Player(0, 0, 16, 16, this.width, this.height, spritePlayer);
                this.entities.push(this.player);
                this.world = new World('./img/map1.png', this);
            }
        });
    }
}
const game = new Game('LearnTypescript');
game.main();
