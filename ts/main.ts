import Entity from './entity.js';
import Utils from './utils.js';

enum GameState {
    INITIALIZING,
    MAINMENU,
    PLAY,
    CUTSCENE,
    PAUSEMENU,
    ENDING
};

class Game {
    public name: string;
    public width: number;
    public height: number;
    public scale: number;
    public state: GameState;
    public testEntity: Entity;
    private isRunning: boolean;
    private canvas: HTMLCanvasElement;
    private context2D: CanvasRenderingContext2D;
    private fpsCounter: HTMLSpanElement;

    constructor(name: string) {
        this.name = name;
        this.width = 320;
        this.height = 180;
        this.scale = this.determineScale();
        this.state = GameState.PLAY;
        this.testEntity = new Entity(
            0, 
            (this.height/2 - 8), 
            16, 
            16, 
            this.width, 
            this.height
        );
        this.isRunning = false;
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this.context2D = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.fpsCounter = document.getElementById("fpsCounter") as HTMLSpanElement;
    }

    public main() {
        this.canvas.width = window.innerWidth - 16;
        this.canvas.height = window.innerHeight - 16;
        this.context2D.fillStyle = 'black';
        this.context2D.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context2D.scale(this.scale, this.scale);
        this.run();
    }

    private tick() {
        this.testEntity.tick();
    }

    private render() {
        this.context2D.fillStyle = 'black';
        this.context2D.fillRect(0, 0, this.width, this.height);
        this.testEntity.render(this.context2D);
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
               // self.fpsCounter.innerText = `FPS: ${frames}`;
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

    private determineScale() {
        const browserWidth = window.innerHeight - 16;
        const browserHeight = window.innerWidth - 16;

        const scaleWidth = browserWidth / this.width;
        const scaleHeight = browserHeight / this.height;

        let finalScale = (scaleWidth + scaleHeight) / 2;
        finalScale = Math.floor(finalScale) - 1;
        finalScale = finalScale < 1 ? 1 : finalScale;
        return finalScale;
    }
}

const game = new Game('teste');
game.main();
