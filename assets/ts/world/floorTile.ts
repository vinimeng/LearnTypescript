import Tile from "./tile.js";

export default class FloorTile extends Tile {
    constructor(x: number, y: number, sprite: ImageBitmap) {
        super(x, y, sprite);
    }
}