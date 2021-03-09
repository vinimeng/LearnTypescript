import Entity from "./entity.js";
export default class Player extends Entity {
    constructor(x, y, width, height, gameWidth, gameHeight, sprite) {
        super(x, y, width, height, gameWidth, gameHeight, sprite);
    }
    tick() {
    }
    render(context2D) {
        context2D.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}
