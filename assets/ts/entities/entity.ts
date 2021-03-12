export default class Entity {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public sprite: Array<ImageBitmap>;

    constructor(
        x: number, 
        y: number, 
        width: number, 
        height: number,
        sprite: Array<ImageBitmap>
    ) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprite = sprite;
    }

    public tick() {
        
    }

    public render(context2D: CanvasRenderingContext2D) {
        context2D.drawImage(this.sprite[0], this.x, this.y, this.width, this.height);
    }
}
