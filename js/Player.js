import { Entity } from "./Entity.js";
import { PlayerControls } from "./PlayerControls.js";

export class Player extends Entity {
    constructor(game, x, y) {
        super(game, x, y, "player");
        this.controls = new PlayerControls();
        this.scale(100, 100);
        this.speed = 6;
        // hitArea
        this.sprite.interactive = true;
        // make sprite screen bound
        this.screenBound = true;
    }
}
