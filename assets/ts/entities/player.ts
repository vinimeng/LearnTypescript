import Entity from "./entity.js";

export default class Player extends Entity{
    constructor(
        x: number, 
        y: number, 
        width: number, 
        height: number, 
        gameWidth: number,
        gameHeight: number,
        sprite: ImageBitmap
    ) {
        super(x, y, width, height, gameWidth, gameHeight, sprite);
    }

    public tick() {

    }

    public render(context2D: CanvasRenderingContext2D) {
        context2D.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}
