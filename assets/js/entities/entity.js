export default class Entity {
    constructor(x, y, width, height, gameWidth, gameHeight, sprite) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.sprite = sprite;
    }
    tick() {
    }
    render(context2D) {
        context2D.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}
