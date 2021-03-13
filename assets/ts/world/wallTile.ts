import Tile from "./tile";

export default class WallTile extends Tile {
    constructor(x: number, y: number, sprite: ImageBitmap) {
        super(x, y, sprite);
    }
}