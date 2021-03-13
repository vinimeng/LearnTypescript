import Entity from "./entity";

export default class Player extends Entity{
    constructor(
        x: number, 
        y: number, 
        width: number, 
        height: number,
        sprite: Array<ImageBitmap>
    ) {
        super(x, y, width, height, sprite);
    }

    public tick() {

    }

    public render(context2D: CanvasRenderingContext2D) {
        context2D.drawImage(this.sprite[0], this.x, this.y, this.width, this.height);
    }
}
