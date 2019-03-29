import { Controls } from "./Controls.js";
import { Player } from "./Player.js";


export class Game {
    constructor() {
        // app generation
        this.app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
        document.body.appendChild(this.app.view);
        // setup controls
        this.controls = new Controls();
        this.player = new Player(this.app, this.controls, 100, 100);
    }
}
