import { TILE_SIZE } from "../misc/constants.js";
export default class Tile {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
    }
    render(context2D) {
        context2D.drawImage(this.sprite, this.x, this.y, TILE_SIZE, TILE_SIZE);
    }
}
