import { Grid } from "./world/Grid.js";
import { Player } from "./entity/Player.js";

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.grid = new Grid();
        //this.player = new Player();
    }
}
