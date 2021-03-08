export default class Entity {
    constructor(x, y, width, height, gameWidth, gameHeight) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }
    tick() {
    }
    render(context2D) {
        context2D.fillStyle = 'red';
        context2D.fillRect(this.x, this.y, this.width, this.height);
    }
}
