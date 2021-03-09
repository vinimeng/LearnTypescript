export default class Spritesheet {
    public spritesheet: HTMLImageElement;

    constructor() {
        this.spritesheet = document.createElement('img');
    }

    public setSpritesheet(img: string) {
        return new Promise((resolve, reject) => {
            this.spritesheet.onload = () => resolve(true);
            this.spritesheet.onerror = reject;
            this.spritesheet.src = img;
        });
    }

    public getSprite(x: number, y: number, width: number, height: number) {
        return createImageBitmap(this.spritesheet, x, y, width, height);
    }

}