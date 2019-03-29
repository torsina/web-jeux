export class Coords {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static notInstanceOfCoords(object) {
        throw new Error(`${object} is not of type Coords`);
    }
}
