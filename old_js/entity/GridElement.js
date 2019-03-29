import { Coords } from "../world/Coords.js";
import { Grid } from "../world/Grid.js";

export class GridElement {
    constructor(coords, grid) {
        if(!(grid instanceof Grid)) throw new Error(`${grid} is not of type Grid`);
        this.grid = grid;
        this.setCoordinates(coords);
    }
    setCoordinates(coords) {
        if(!(coords instanceof Coords)) {
            Coords.notInstanceOfCoords(coords);
        } else {
            this.coords = coords;
        }
        this.grid.insertElement(this);
    }
    move(xDelta, yDelta) {

    }
}
