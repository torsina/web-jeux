export class PlayerControls {
    constructor() {
        this.custom = {
            left: -1,
            right: -1,
            fire: -1
        };
        this.left = false;
        this.right = false;
        this.fire = false;
        window.onkeydown = (key) => {
            const code = key.keyCode ? key.keyCode : key.which;
            switch(code) {
                case this.custom.left:      // custom
                case 37:                    // left arrow
                case 81: {                  // q
                    this.left = true;
                    break;
                }
                case this.custom.right:     // custom
                case 39:                    // left arrow
                case 68: {                  // d
                    this.right = true;
                    break;
                }
                case this.custom.fire:      // custom
                case 32: {                  // spacebar
                    this.fire = true;
                    break;
                }
            }
        };
        window.onkeyup = (key) => {
            const code = key.keyCode ? key.keyCode : key.which;
            switch(code) {
                case this.custom.left:      // custom
                case 37:                    // left arrow
                case 81: {                  // q
                    this.left = false;
                    break;
                }
                case this.custom.right:     // custom
                case 39:                    // left arrow
                case 68: {                  // d
                    this.right = false;
                    break;
                }
                case this.custom.fire:      // custom
                case 32: {                  // spacebar
                    this.fire = false;
                    break;
                }
            }
        };
    }
}
