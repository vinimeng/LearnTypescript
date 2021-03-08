export default class Entity {
    constructor(x, y, width, height, gameWidth, gameHeight, scale) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.scale = scale;
    }
    tick() {
        this.x += 2;
        if (this.x > this.gameWidth * this.scale) {
            this.x = -this.width * this.scale;
        }
    }
    render(context2D) {
        context2D.fillStyle = 'red';
        context2D.fillRect(this.x, this.y, this.width * this.scale, this.height * this.scale);
    }
}
