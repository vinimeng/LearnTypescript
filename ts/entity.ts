export default class Entity {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public scale: number;
    public gameWidth: number;
    public gameHeight: number;

    constructor(
        x: number, 
        y: number, 
        width: number, 
        height: number, 
        gameWidth: number,
        gameHeight: number,
        scale: number
    ) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.scale = scale;
    }

    public tick() {
        this.x += 2;
        if(this.x > this.gameWidth * this.scale) {
            this.x = -this.width * this.scale;
        }
    }

    public render(context2D: CanvasRenderingContext2D) {
        context2D.fillStyle = 'red';
        context2D.fillRect(this.x, this.y, this.width * this.scale, this.height * this.scale);
    }
}