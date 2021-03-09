import FloorTile from './floorTile.js';
import Game from './main.js';
import Utils from './utils.js';
import WallTile from './wallTile.js';

export default class World {
    
    private map: HTMLImageElement;
    private canvas: HTMLCanvasElement;
    private context2D: CanvasRenderingContext2D;
    private game: Game;
    
    constructor(map: string, game: Game) {
        this.map = document.createElement('img');
        this.canvas = document.createElement('canvas');
        this.context2D = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.game = game;
        this.createWorld(map);
    }

    private async createWorld(map: string) {
        let floorSprite = await this.game.spritesheet.getSprite(0, 0, 16, 16);
        let wallSprite = await this.game.spritesheet.getSprite(16, 0, 16, 16);
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
                            this.game.tiles.push(new WallTile(
                                j * 16,
                                i * 16,
                                wallSprite
                            ));
                            break;
                        default:
                            this.game.tiles.push(new FloorTile(
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