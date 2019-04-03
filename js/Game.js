import { AssetLoader } from "./AssetLoader.js";
import { Entity } from "./Entity.js";
import { Player } from "./Player.js";

export class Game {
    constructor() {
        // app generation
        this.app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
        document.body.appendChild(this.app.view);
        // setup controls
        // load ressources then do everything else
        this.assetLoader = new AssetLoader(this.app);
        this.assetLoader.init().then((resources) => {
            const { screen } = this.app.renderer;
            this.screen = new PIXI.Rectangle(screen.x, screen.y, screen.width, screen.height);
            console.log(this);
            this.player = new Player(this, 200, 200);

        });
    }
}
