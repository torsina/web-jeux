//import { Game } from "./Game.js";

$(document).ready(() => {
    var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
    document.body.appendChild(app.view);

// create a new Sprite from an image path
    var bunny = PIXI.Sprite.fromImage('./images/player.png');
    bunny.scale.x = 0.2;
    bunny.scale.y = 0.2;

// center the sprite's anchor point
    bunny.anchor.set(0.5);

// move the sprite to the center of the screen
    bunny.x = app.screen.width / 2;
    bunny.y = app.screen.height / 2;

    app.stage.addChild(bunny);

// Listen for animate update
    app.ticker.add(function(delta) {
        // just for fun, let's rotate mr rabbit a little
        // delta is 1 if running at 100% performance
        // creates frame-independent transformation
        bunny.rotation += 0.1 * delta;
    });

    /**
     * const gameScreen = document.getElementById("gameScreen");
     gameScreen.style.width = `500px`;
     gameScreen.style.height = `500px`;
     const ctx = gameScreen.getContext("2d");
     ctx.imageSmoothingEnabled = false;
     //const game = new Game(ctx);


     var img = new Image(1000, 1000);   // Crée un nouvel élément img
     img.onload = () => {
        ctx.drawImage(img, 0, 0);
        console.log(img);
    };
     img.src = './images/player.png'; // définit le chemin de la source
     */
});

