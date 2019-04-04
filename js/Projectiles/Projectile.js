export class Projectile {
    constructor(game, x, y, vx, vy, textureAlias) {
        const app = game.app;
        this.game = game;
        this.app = app;
        this.sprite = new PIXI.Sprite(app.loader.resources[textureAlias].texture);
        this.app.stage.addChild(this.sprite);
        this.sprite.hitArea = new PIXI.Rectangle(x, y, this.sprite.width, this.sprite.height);
        this.vx = vx;
        this.vy = vy;
        this.startMovement();
    }
    startMovement() {
        this._movementMiddleware = (timeDelta) => {
            this.sprite.x += timeDelta * this.vx;
            this.sprite.y += timeDelta * this.vy;
            this.sprite.hitArea.x += timeDelta * this.vx;
            this.sprite.hitArea.y += timeDelta * this.vy;
        };
        this.app.ticker.add(this._movementMiddleware);
    }
    stopMovement() {
        this.app.ticker.remove(this._movementMiddleware);
    }
}
