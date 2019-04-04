export class Entity {
    constructor(game, x, y, textureAlias) {
        const app = game.app;
        this.game = game;
        this.app = app;
        this.sprite = new PIXI.Sprite(app.loader.resources[textureAlias].texture);
        this.sprite.hitArea = new PIXI.Rectangle(x, y, this.sprite.width, this.sprite.height);
        this.newHitArea = new PIXI.Rectangle(x, y, this.sprite.width, this.sprite.height);
        this.sprite.x = x;
        this.sprite.y = y;
        app.stage.addChild(this.sprite);
        this.startMovement();
    }
    startMovement() {
        this._movementMiddleware = (timeDelta) => {
            const { controls: { left, right } } = this;
            if(left && !right) {
                // collision detection
                this.newHitArea.x -= this.speed * timeDelta;
                let isColliding = this.entityCollision();
                // game screen border collision
                // only fires if screenBound is defined in upper class layers
                if(!isColliding && this.screenBound) {
                    isColliding = this.screenCollision();
                }
                // movement
                if(!isColliding) {
                    this.sprite.hitArea.x -= this.speed * timeDelta;
                    this.sprite.x -= this.speed * timeDelta;
                } else {
                    // replace test hitbox on sprite
                    this.newHitArea.x = this.sprite.x;
                }
            } else if(!left && right) {
                // collision detection
                this.newHitArea.x += this.speed * timeDelta;
                let isColliding = this.entityCollision();
                // game screen border collision
                // only fires if screenBound is defined in upper class layers
                if(!isColliding && this.screenBound) {
                    isColliding = this.screenCollision();
                }
                // movement
                if(!isColliding) {
                    this.sprite.hitArea.x += this.speed * timeDelta;
                    this.sprite.x += this.speed * timeDelta;
                } else {
                    // replace test hitbox on sprite
                    this.newHitArea.x = this.sprite.x;
                }
            }
        };
        this.app.ticker.add(this._movementMiddleware);
    }
    stopMovement() {
        this.app.ticker.remove(this._movementMiddleware);
    }
    entityCollision() {
        let isColliding = false;
        for(let i = 0; i < this.app.stage.children.length; i++) {
            const element = this.app.stage.children[i];
            if(element !== this.sprite) {
                isColliding = Entity.collision(this.newHitArea, element);
                if(isColliding) break;
            }
        }
        return isColliding;
    }
    screenCollision() {
        const screen = this.game.screen;
        const botLeft = screen.contains(this.newHitArea.left, this.newHitArea.bottom);
        const botRight = screen.contains(this.newHitArea.right, this.newHitArea.bottom);
        const topLeft = screen.contains(this.newHitArea.left, this.newHitArea.top);
        const topRight = screen.contains(this.newHitArea.right, this.newHitArea.top);
        /**
         console.log(`botLeft (${this.newHitArea.left}, ${this.newHitArea.bottom}): ${botLeft}`);
         console.log(`botRight (${this.newHitArea.right}, ${this.newHitArea.bottom}): ${botRight}`);
         console.log(`topLeft (${this.newHitArea.left}, ${this.newHitArea.top}): ${topLeft}`);
         console.log(`topRight (${this.newHitArea.right}, ${this.newHitArea.top}): ${topRight}`);
         */
        const test = !botLeft || !botRight || !topLeft || !topRight;
        return test;
    }
    static collision(entity1, entity2) {
        // hit will determine whether there's a collision
        let hit = false;

        // Find the center points of each sprite
        entity1.centerX = entity1.x + (entity1.width / 2);
        entity1.centerY = entity1.y + (entity1.height / 2);
        entity2.centerX = entity2.x + (entity2.width / 2);
        entity2.centerY = entity2.y + (entity2.height / 2);

        // Find the half-widths and half-heights of each sprite
        entity1.halfWidth = entity1.width / 2;
        entity1.halfHeight = entity1.height / 2;
        entity2.halfWidth = entity2.width / 2;
        entity2.halfHeight = entity2.height / 2;

        // Calculate the distance vector between the sprites
        const vx = entity1.centerX - entity2.centerX;
        const vy = entity1.centerY - entity2.centerY;

        // Figure out the combined half-widths and half-heights
        const combinedHalfWidths = entity1.halfWidth + entity2.halfWidth;
        const combinedHalfHeights = entity1.halfHeight + entity2.halfHeight;

        // Check for a collision on the x axis
        if(Math.abs(vx) < combinedHalfWidths) {
            // A collision might be occurring. Check for a collision on the y axis
            if(Math.abs(vy) < combinedHalfHeights) {
                // There's definitely a collision happening
                hit = true;
            }
        }

        console.log(`collision: ${hit}`);
        return !hit;
    }
    scale(newWidth, newHeight) {
        this.sprite.width = newWidth;
        this.sprite.height = newHeight;
        this.sprite.hitArea.width = newWidth;
        this.sprite.hitArea.height = newHeight;
        this.newHitArea.width = newWidth;
        this.newHitArea.height = newHeight;
    }
}
