import Entity from "./entity.js";
export default class Player extends Entity {
    constructor(x, y, width, height, sprite) {
        super(x, y, width, height, sprite);
    }
    tick() {
    }
    render(context2D) {
        context2D.drawImage(this.sprite[0], this.x, this.y, this.width, this.height);
    }
}
