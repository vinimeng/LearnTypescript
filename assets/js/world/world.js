var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import FloorTile from './floorTile.js';
import Utils from '../misc/utils.js';
import WallTile from './wallTile.js';
export default class World {
    constructor(map, game) {
        this.map = document.createElement('img');
        this.canvas = document.createElement('canvas');
        this.context2D = this.canvas.getContext('2d');
        this.game = game;
        this.createWorld(map);
    }
    createWorld(map) {
        return __awaiter(this, void 0, void 0, function* () {
            let floorSprite = yield this.game.spritesheet.getSprite(32, 48, 16, 16);
            let wallSprite = yield this.game.spritesheet.getSprite(64, 48, 16, 16);
            this.map.src = map;
            this.map.onload = () => {
                this.context2D.drawImage(this.map, 0, 0);
                this.map.style.display = 'none';
                for (let i = 0; i < this.map.height; i++) {
                    for (let j = 0; j < this.map.width; j++) {
                        let pixelData = this.context2D.getImageData(j, i, 1, 1);
                        let data = pixelData.data;
                        switch (Utils.RGBAToHexA(data[0], data[1], data[2], data[3])) {
                            case '#ffffffff':
                                this.game.tiles.push(new WallTile(j * 16, i * 16, wallSprite));
                                break;
                            case '#0b2a83ff':
                                this.game.player.x = j * 16;
                                this.game.player.y = i * 16;
                                this.game.tiles.push(new FloorTile(j * 16, i * 16, floorSprite));
                                break;
                            default:
                                this.game.tiles.push(new FloorTile(j * 16, i * 16, floorSprite));
                        }
                    }
                }
            };
        });
    }
}
