import { GridElement } from "./GridElement.js";

export class Entity extends GridElement {
    constructor(data) {
        const { health, maxHealth, coords, grid, handlers: { deathHandler } } = data;
        super(coords, grid);
        this.setMaxHealth(maxHealth);
        this.setHealth(health);
        this.handlers = {
            deathHandler
        };
    }
    setMaxHealth(maxHealth) {
        if(maxHealth > 0 && !isNaN(maxHealth)) {
            this.maxHealth = maxHealth;
            this.alive = true;
        } else if(maxHealth === 0 && !isNaN(maxHealth)) {
            this.maxHealth = 0;
            this.alive = false;
        }
    }
    setHealth(health) {
        if(!this.maxHealth) throw new Error("Entity maxHealth is not set");
        if(health > 0 && !isNaN(health) && health <= this.maxHealth) {
            this.health = health;
        } else {
            throw new Error(`Entity invalid health ${health}`);
        }
    }
    addHealth(healPoints) {
        if(healPoints > 0 && !isNaN(healPoints)) {
            if(this.health + healPoints > this.maxHealth) {
                this.health = this.maxHealth;
            } else {
                this.health += healPoints;
            }
        } else {
            throw new Error(`Entity invalid healPoints ${healPoints}`);
        }
    }
    removeHealth(damagePoints) {
        if(damagePoints > 0 && !isNaN(damagePoints)) {
            if(this.health - damagePoints <= 0) {
                this.death();
            } else {
                this.health -= damagePoints;
            }
        } else {
            throw new Error(`Entity invalid damagePoints ${damagePoints}`);
        }
    }
    death() {

    }
}
