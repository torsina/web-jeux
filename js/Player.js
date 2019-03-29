import { Entity } from "./Entity.js";

export class Player extends Entity {
    constructor(app, controls, x, y) {
        super(app, x, y, "./images/player.png");
        this.controls = controls;
        this.sprite.scale.x = 0.2;
        this.sprite.scale.y = 0.2;
        this.speed = 4;
        // hitArea
        this.sprite.interactive = true;
        this.sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
        this.startMovement();
    }
    startMovement() {
        this._movementMiddleware = (timeDelta) => {
            const { controls: { left, right } } = this;
            console.log(this.sprite.hitArea);
            if(left && !right) {
                this.sprite.position.x -= this.speed * timeDelta;
            } else if(!left && right) {
                this.sprite.position.x += this.speed * timeDelta;
            }
        };
        this.app.ticker.add(this._movementMiddleware);
    }
    stopMovement() {
        this.app.ticker.remove(this._movementMiddleware);
    }
}
