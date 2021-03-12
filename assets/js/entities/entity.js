export default class Entity {
    constructor(x, y, width, height, sprite) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprite = sprite;
    }
    tick() {
    }
    render(context2D) {
        context2D.drawImage(this.sprite[0], this.x, this.y, this.width, this.height);
    }
}
