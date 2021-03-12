import Entity from './entities/entity.js';
import Player from './entities/player.js';
import Spritesheet from './graphics/spritesheet.js';
import { GameState, HEIGHT, WIDTH } from './misc/constants.js';
import HTML from './misc/html.js';
import Tile from './world/tile.js';
import World from './world/world.js';

export default class Game {
    public static tiles = new Array<Tile>();
    public static entities = new Array<Entity>();
    public static player: Player;
    public spritesheet: Spritesheet;
    public scale: number;
    public state: GameState;
    public world: World;
    private isRunning: boolean;
    private appDiv : HTMLDivElement;
    private canvas: HTMLCanvasElement;
    private context2D: CanvasRenderingContext2D;
    private html: HTML;

    constructor() {
        this.spritesheet = new Spritesheet();
        this.world = new World();

        this.appDiv = document.getElementById('app') as HTMLDivElement;
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.context2D = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        this.html = new HTML();
        
        this.scale = this.determineScale();
        this.state = GameState.PLAY;

        this.isRunning = false;
    }

    public async main() {
        await this.loadAssets();
        Game.player = new Player(
            0,
            0,
            16,
            28,
            [Spritesheet.arraySprites[Spritesheet.arraySpritesKeys.indexOf('lizard_m_idle_anim_1')]]
        );
        Game.entities.push(Game.player);
        this.world.createWorld('./assets/img/map1.png');
        this.initializeEvents();
        this.adjustCanvas();
        this.run();
    }

    private tick() {
        Game.entities.forEach((entity, index) => {
            entity.tick();
        });
    }

    private render() {
        Game.tiles.forEach((tiles, index) => {
            tiles.render(this.context2D);
        });
        Game.entities.forEach((entity, index) => {
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
            
            if(self.html.spanFPS.style.display === 'block') {
                frames++;
                if(now - last > 1000) {
                    self.html.spanFPS.innerText = `${frames}fps`;
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
        this.canvas.width = WIDTH * this.scale;
        this.canvas.height = HEIGHT * this.scale;
        this.context2D.fillStyle = 'black';
        this.context2D.fillRect(0, 0, WIDTH * this.scale, HEIGHT * this.scale);
        this.context2D.scale(this.scale, this.scale);
        this.context2D.imageSmoothingEnabled = false;
    }

    private determineScale() {
        const divWidth = this.appDiv.offsetWidth;
        const divHeight = this.appDiv.offsetHeight;

        let finalScale = divWidth / WIDTH;

        if(finalScale >= 1) {
            finalScale = Math.floor(finalScale);
            if(WIDTH * finalScale > divWidth
                || HEIGHT * finalScale > divHeight) {
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
        window.addEventListener('resize', () => {
            this.scale = this.determineScale();
            this.adjustCanvas();
        });
    }

    private async loadAssets() {
        await this.spritesheet.loadSprites();
    }
}

const game = new Game();
game.main();
