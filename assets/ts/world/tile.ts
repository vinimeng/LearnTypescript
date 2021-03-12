import { TILE_SIZE } from "../misc/constants.js";

export default class Tile {

    private x: number;
    private y: number;
    private sprite: ImageBitmap;

    constructor(x: number, y: number, sprite: ImageBitmap) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
    }

    public render(context2D: CanvasRenderingContext2D) {
        context2D.drawImage(this.sprite, this.x, this.y, TILE_SIZE, TILE_SIZE);
    }
}