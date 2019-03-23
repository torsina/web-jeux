import { Game } from "./Game.js";

$(document).ready(() => {
    const gameScreen = document.getElementById("gameScreen");
    gameScreen.style.width = `${Math.ceil(window.innerWidth * 0.8)}px`;
    gameScreen.style.height = `${Math.ceil(window.innerHeight * 0.8)}px`;
    const game = new Game(gameScreen.getContext());
});
