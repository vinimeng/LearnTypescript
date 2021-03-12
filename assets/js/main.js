var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Player from './entities/player.js';
import Spritesheet from './graphics/spritesheet.js';
import { GameState, HEIGHT, WIDTH } from './misc/constants.js';
import HTML from './misc/html.js';
import World from './world/world.js';
export default class Game {
    constructor() {
        this.spritesheet = new Spritesheet();
        this.world = new World();
        this.appDiv = document.getElementById('app');
        this.canvas = document.getElementById('canvas');
        this.context2D = this.canvas.getContext('2d');
        this.html = new HTML();
        this.scale = this.determineScale();
        this.state = GameState.PLAY;
        this.isRunning = false;
    }
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadAssets();
            Game.player = new Player(0, 0, 16, 28, [Spritesheet.arraySprites[Spritesheet.arraySpritesKeys.indexOf('lizard_m_idle_anim_1')]]);
            Game.entities.push(Game.player);
            this.world.createWorld('./assets/img/map1.png');
            this.initializeEvents();
            this.adjustCanvas();
            this.run();
        });
    }
    tick() {
        Game.entities.forEach((entity, index) => {
            entity.tick();
        });
    }
    render() {
        Game.tiles.forEach((tiles, index) => {
            tiles.render(this.context2D);
        });
        Game.entities.forEach((entity, index) => {
            entity.render(this.context2D);
        });
    }
    run() {
        let self = this;
        let frames = 0;
        let last = 0;
        function loop(now) {
            self.tick();
            self.render();
            if (self.html.spanFPS.style.display === 'block') {
                frames++;
                if (now - last > 1000) {
                    self.html.spanFPS.innerText = `${frames}fps`;
                    frames = 0;
                    last = now;
                }
            }
            if (self.isRunning) {
                window.requestAnimationFrame(loop);
            }
        }
        this.isRunning = true;
        window.requestAnimationFrame(loop);
    }
    adjustCanvas() {
        this.canvas.width = WIDTH * this.scale;
        this.canvas.height = HEIGHT * this.scale;
        this.context2D.fillStyle = 'black';
        this.context2D.fillRect(0, 0, WIDTH * this.scale, HEIGHT * this.scale);
        this.context2D.scale(this.scale, this.scale);
        this.context2D.imageSmoothingEnabled = false;
    }
    determineScale() {
        const divWidth = this.appDiv.offsetWidth;
        const divHeight = this.appDiv.offsetHeight;
        let finalScale = divWidth / WIDTH;
        if (finalScale >= 1) {
            finalScale = Math.floor(finalScale);
            if (WIDTH * finalScale > divWidth
                || HEIGHT * finalScale > divHeight) {
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
        window.addEventListener('resize', () => {
            this.scale = this.determineScale();
            this.adjustCanvas();
        });
    }
    loadAssets() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.spritesheet.loadSprites();
        });
    }
}
Game.tiles = new Array();
Game.entities = new Array();
const game = new Game();
game.main();
