export default class Entity {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public gameWidth: number;
    public gameHeight: number;
    public sprite: ImageBitmap;

    constructor(
        x: number, 
        y: number, 
        width: number, 
        height: number, 
        gameWidth: number,
        gameHeight: number,
        sprite: ImageBitmap
    ) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.sprite = sprite;
    }

    public tick() {
        
    }

    public render(context2D: CanvasRenderingContext2D) {
        context2D.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}
