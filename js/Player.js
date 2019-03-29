import { Entity } from "./Entity.js";

export class Player extends Entity{
    constructor(app, controls, x, y) {
        super(app, x, y, "./images/player.png");
        this.sprite.scale.x = 0.2;
        this.sprite.scale.y = 0.2;
    }
}
