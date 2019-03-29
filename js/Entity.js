export class Entity {
    constructor(app, x, y, texture) {
        this.sprite = PIXI.Sprite.fromImage(texture);
        this.sprite.anchor.set(0.5);
        app.stage.add(this.sprite);
    }
}
