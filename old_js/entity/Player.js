import { Entity } from "./Entity.js";

export class Player extends Entity {
    constructor(data) {
        super(data);
        const { ctx } = data;
        this.ctx = ctx;
    }
    draw() {
        const ctx = this.ctx;
        ctx.fillStyle = "black";
        ctx.beginPath();

    }
    deathAnimation() {

    }
}
