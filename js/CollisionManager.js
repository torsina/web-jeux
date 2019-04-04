import { Entity } from "./Entity.js";
import { Projectile } from "./Projectiles/Projectile.js";

export class CollisionManager {
    constructor(game) {
        this.game = game;
        this.elements = [];
        this.entities = [];
        this.projectiles = [];
        this.entityOwnership = new Map();
    }
    addEntity(entity) {
        this.elements.push(entity);
        this.entities.push(entity);
        this.entityOwnership.set(entity, []);
    }
    addProjectile(entity, projectile) {
        this.elements.push(entity);
        this.projectiles.push(projectile);
        this.entityOwnership.get(entity).push(projectile);
    }
    removeEntity(entity) {
        this.elements.splice(this.elements.indexOf(entity), 1);
        this.entities.splice(this.entities.indexOf(entity), 1);
        const projectiles = this.entityOwnership.get(entity);
        for(let i = 0; i < projectiles.length; i++) {
            this.projectiles.splice(this.projectiles.indexOf(projectiles[i]), 1);
        }
        this.entityOwnership.delete(entity);
    }
    removeProjectile(entity, projectile) {
        this.elements.splice(this.elements.indexOf(projectile), 1);
        this.projectiles.splice(this.projectiles.indexOf(projectile), 1);
        this.entityOwnership.get(entity).splice(this.entityOwnership.get(entity).indexOf(projectile), 1);
    }

    /**
     *
     * @param baseElement {Entity | Projectile}
     * @returns {Array}
     */
    checkElementCollisions(baseElement) {
        // for the collision check, we use the newHitArea of baseElement and hitArea of testedElement
        // all the entities and projectiles should have a hitArea
        const collidedElements = [];
        for(let i = 0; i < this.elements; i++) {
            const testedElement = this.elements[i];
            if(testedElement !== baseElement &&
                this.checkElementCollision(baseElement, testedElement)) collidedElements.push(testedElement);
        }
        return collidedElements;
    }
    checkElementCollision(element1, element2) {

    }
    checkScreenCollision(element1) {

    }
}

class CollisionObject {
    constructor(object, type, owner) {

    }
}
