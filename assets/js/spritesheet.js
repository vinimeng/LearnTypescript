export default class Spritesheet {
    constructor() {
        this.spritesheet = document.createElement('img');
    }
    setSpritesheet(img) {
        return new Promise((resolve, reject) => {
            this.spritesheet.onload = () => resolve(true);
            this.spritesheet.onerror = reject;
            this.spritesheet.src = img;
        });
    }
    getSprite(x, y, width, height) {
        return createImageBitmap(this.spritesheet, x, y, width, height);
    }
}
