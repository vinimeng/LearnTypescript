import Entity from './entity.js';
import Spritesheet from './spritesheet.js';
import Tile from './tile.js';
import Utils from './utils.js';
import World from './world.js';

enum GameState {
    INITIALIZING,
    MAINMENU,
    PLAY,
    CUTSCENE,
    PAUSEMENU,
    ENDING
};

export default class Game {
    public name: string;
    public width: number;
    public height: number;
    public scale: number;
    public state: GameState;
    public tiles: Array<Tile>;
    public entities: Array<Entity>;
    public spritesheet: Spritesheet;
    public spritesheetLoaded: boolean;
    public world!: World;
    private isRunning: boolean;
    private appDiv : HTMLDivElement;
    private canvas: HTMLCanvasElement;
    private context2D: CanvasRenderingContext2D;
    private fpsCounter: HTMLSpanElement;

    constructor(name: string) {
        this.entities = [];
        this.tiles = [];
        this.spritesheet = new Spritesheet();
        this.spritesheetLoaded = false;
        this.loadSpritesheet('./img/spritesheet.png');


        this.appDiv = document.getElementById("app") as HTMLDivElement;
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this.context2D = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.fpsCounter = document.getElementById("fpsCounter") as HTMLSpanElement;
        
        this.name = name;
        this.width = 320;
        this.height = 180;
        this.scale = this.determineScale();
        this.state = GameState.PLAY;

        this.isRunning = false;
    }

    public async main() {
        this.initializeEvents();
        this.adjustCanvas();
        this.run();
    }

    private tick() {
        this.entities.forEach((entity, index) => {
            entity.tick();
        });
    }

    private render() {
        this.tiles.forEach((tiles, index) => {
            tiles.render(this.context2D);
        });
        this.entities.forEach((entity, index) => {
            entity.render(this.context2D);
        });
    }

    private run() {
        let self = this;
        let frames = 0;
        let timer = Date.now();

        function loop(now: number) {
            self.tick();
            self.render();
            frames++;
            
            if(Date.now() - timer > 1000) {
                self.fpsCounter.innerText = `FPS: ${frames}`;
                frames = 0;
                timer += 1000;
            }

            if(self.isRunning) {
                window.requestAnimationFrame(loop);
            }
        }
        
        this.isRunning = true;
        window.requestAnimationFrame(loop);
    }

    private adjustCanvas() {
        this.canvas.width = this.width * this.scale;
        this.canvas.height = this.height * this.scale;
        this.context2D.fillStyle = 'black';
        this.context2D.fillRect(0, 0, this.width * this.scale, this.height * this.scale);
        this.context2D.scale(this.scale, this.scale);
        this.context2D.imageSmoothingEnabled = false;
    }

    private determineScale() {
        const divWidth = this.appDiv.offsetWidth;
        const divHeight = this.appDiv.offsetHeight;

        let finalScale = divWidth / this.width;

        if(finalScale >= 1) {
            finalScale = Math.floor(finalScale);
            if(this.width * finalScale > divWidth
                || this.height * finalScale > divHeight) {
                finalScale = finalScale - 1;
            }
        } 
        
        if(finalScale < 1 && finalScale >= 0.75) {
            finalScale = 0.75;
        } else if (finalScale < 0.75 && finalScale >= 0.5) {
            finalScale = 0.5;
        } else if (finalScale < 0.5) {
            finalScale = 0.25;
        }

        return finalScale;
    }

    private initializeEvents() {
        let self = this;
        window.addEventListener('resize', function () {
            self.scale = self.determineScale();
            self.adjustCanvas();
        });
    }

    private async loadSpritesheet(img: string) {
        this.spritesheetLoaded = await this.spritesheet.setSpritesheet(img) as boolean;
        if(this.spritesheetLoaded !== true) {
            this.spritesheetLoaded = false;
        }

        if(this.spritesheetLoaded) {
            this.world = new World('./img/map1.png', this);
        }
    }
}

const game = new Game('LearnTypescript');
game.main();
