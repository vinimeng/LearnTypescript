import FloorTile from './floorTile.js';
import Game from '../main.js';
import Utils from '../misc/utils.js';
import WallTile from './wallTile.js';
import Spritesheet from '../graphics/spritesheet.js';

export default class World {
    
    private map: HTMLImageElement;
    private canvas: HTMLCanvasElement;
    private context2D: CanvasRenderingContext2D;
    
    constructor() {
        this.map = document.createElement('img');
        this.canvas = document.createElement('canvas');
        this.context2D = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    }

    public createWorld(map: string) {
        let floorSprite = Spritesheet.arraySprites[Spritesheet.arraySpritesKeys.indexOf('floor_1')];
        let wallSprite = Spritesheet.arraySprites[Spritesheet.arraySpritesKeys.indexOf('wall_hole_1')];
        this.map.src = map;
        this.map.onload = () => {
            this.context2D.drawImage(this.map, 0, 0);
            this.map.style.display = 'none';
            for(let i = 0; i < this.map.height; i++) {
                for(let j = 0; j < this.map.width; j++) {
                    let pixelData = this.context2D.getImageData(j, i, 1, 1);
                    let data = pixelData.data;
                    switch (Utils.RGBAToHexA(data[0], data[1], data[2], data[3])) {
                        case '#ffffffff':
                            Game.tiles.push(new WallTile(
                                j * 16,
                                i * 16,
                                wallSprite
                            ));
                            break;
                        case '#0b2a83ff':
                                Game.player.x = j * 16;
                                Game.player.y = i * 16;
                                Game.tiles.push(new FloorTile(
                                    j * 16,
                                    i * 16,
                                    floorSprite
                                ));
                            break;
                        default:
                            Game.tiles.push(new FloorTile(
                                j * 16,
                                i * 16,
                                floorSprite
                            ));
                    }
                }
            }
        };
    }

}
