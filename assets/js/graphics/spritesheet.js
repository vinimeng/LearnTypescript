var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SPRITESHEET } from "../misc/constants.js";
import { SPRITESCOORD } from "./spritesheet.map.js";
export default class Spritesheet {
    constructor() {
        this.spritesheet = document.createElement('img');
    }
    loadSprites() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setSpritesheet();
            Spritesheet.arraySpritesKeys = Object.keys(SPRITESCOORD);
            for (let sprite in SPRITESCOORD) {
                let spriteCoord = SPRITESCOORD[sprite];
                const sprt = yield this.cutSprite(spriteCoord[0], spriteCoord[1], spriteCoord[2], spriteCoord[3]);
                Spritesheet.arraySprites.push(sprt);
            }
        });
    }
    setSpritesheet() {
        return new Promise((resolve, reject) => {
            this.spritesheet.onload = () => resolve(true);
            this.spritesheet.onerror = reject;
            this.spritesheet.src = SPRITESHEET;
        });
    }
    cutSprite(x, y, width, height) {
        return createImageBitmap(this.spritesheet, x, y, width, height);
    }
}
Spritesheet.arraySpritesKeys = new Array();
Spritesheet.arraySprites = new Array();
