export default class Entity {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public gameWidth: number;
    public gameHeight: number;

    constructor(
        x: number, 
        y: number, 
        width: number, 
        height: number, 
        gameWidth: number,
        gameHeight: number
    ) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    public tick() {
        
    }

    public render(context2D: CanvasRenderingContext2D) {
        context2D.fillStyle = 'red';
        context2D.fillRect(this.x, this.y, this.width, this.height);
    }
}
