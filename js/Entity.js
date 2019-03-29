export class Entity {
    constructor(app, x, y, texture) {
        this.app = app;
        this.sprite = PIXI.Sprite.fromImage(texture);
        this.sprite.texture.baseTexture.on('loaded', function() {
            console.log(this.sprite);
        });
        this.sprite.anchor.set(0.5);
        this.sprite.position.x = x;
        this.sprite.position.y = y;
        app.stage.addChild(this.sprite);
    }
}
