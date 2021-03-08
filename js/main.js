import Entity from './entity.js';
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
class Game {
    constructor(name) {
        this.name = name;
        this.width = 320;
        this.height = 180;
        this.scale = this.determineScale();
        this.state = GameState.PLAY;
        this.testEntity = new Entity(0, (this.height / 2 - 8), 16, 16, this.width, this.height);
        this.isRunning = false;
        this.canvas = document.getElementById("canvas");
        this.context2D = this.canvas.getContext('2d');
        this.fpsCounter = document.getElementById("fpsCounter");
    }
    main() {
        this.canvas.width = window.innerWidth - 16;
        this.canvas.height = window.innerHeight - 16;
        this.context2D.fillStyle = 'black';
        this.context2D.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context2D.scale(this.scale, this.scale);
        this.run();
    }
    tick() {
        this.testEntity.tick();
    }
    render() {
        this.context2D.fillStyle = 'black';
        this.context2D.fillRect(0, 0, this.width, this.height);
        this.testEntity.render(this.context2D);
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
                // self.fpsCounter.innerText = `FPS: ${frames}`;
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
    determineScale() {
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
