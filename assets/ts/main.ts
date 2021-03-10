import Entity from './entities/entity.js';
import Player from './entities/player.js';
import Spritesheet from './graphics/spritesheet.js';
import Tile from './world/tile.js';
import World from './world/world.js';

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
    public player!: Player;
    private isRunning: boolean;
    private showFrames: boolean;
    private appDiv : HTMLDivElement;
    private canvas: HTMLCanvasElement;
    private context2D: CanvasRenderingContext2D;
    private fpsCounter: HTMLSpanElement;

    constructor(name: string) {
        this.entities = [];
        this.tiles = [];
        this.spritesheet = new Spritesheet();
        this.spritesheetLoaded = false;
        this.loadSpritesheet('./assets/img/spritesheet.png');


        this.appDiv = document.getElementById('app') as HTMLDivElement;
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.context2D = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.fpsCounter = document.getElementById('fpsCounter') as HTMLSpanElement;
        
        this.name = name;
        this.width = 320;
        this.height = 180;
        this.scale = this.determineScale();
        this.state = GameState.PLAY;

        this.isRunning = false;
        this.showFrames = true;
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
        let last = 0;

        function loop(now: number) {
            self.tick();
            self.render();
            
            if(self.showFrames) {
                frames++;
                if(now - last > 1000) {
                    self.fpsCounter.innerText = String(frames) + 'fps';
                    frames = 0;
                    last = now;
                }
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
            const spritePlayer = await this.spritesheet.getSprite(80, 144, 16, 16);
            this.player = new Player(
                0,
                0,
                16,
                16,
                this.width,
                this.height,
                spritePlayer
            );
            this.entities.push(this.player);
            this.world = new World('./assets/img/map1.png', this);
        }
    }
}

const game = new Game('LearnTypescript');
game.main();
