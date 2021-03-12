import { SPRITESHEET } from "../misc/constants.js";
import { SPRITESCOORD } from "./spritesheet.map.js";

export default class Spritesheet {
    private spritesheet: HTMLImageElement;
    public static arraySpritesKeys = new Array<string>();
    public static arraySprites = new Array<ImageBitmap>();

    constructor() {
        this.spritesheet = document.createElement('img');
    }

    public async loadSprites() {
        await this.setSpritesheet();
        Spritesheet.arraySpritesKeys = Object.keys(SPRITESCOORD);
        for(let sprite in SPRITESCOORD) {
            let spriteCoord = SPRITESCOORD[sprite] as Array<number>;
            const sprt = await this.cutSprite(spriteCoord[0], spriteCoord[1], spriteCoord[2], spriteCoord[3]);
            Spritesheet.arraySprites.push(sprt);
        }
    }

    private setSpritesheet() {
        return new Promise((resolve, reject) => {
            this.spritesheet.onload = () => resolve(true);
            this.spritesheet.onerror = reject;
            this.spritesheet.src = SPRITESHEET;
        });
    }

    private cutSprite(x: number, y: number, width: number, height: number) {
        return createImageBitmap(this.spritesheet, x, y, width, height);
    }
}
