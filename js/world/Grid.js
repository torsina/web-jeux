import { Coords } from "./Coords.js";

export class Grid {
    constructor(x = 400, y = 400) {
        this._x = x;
        this._y = y;
        this._grid = this._generateGrid();
        this._elements = new Map();
    }
    _generateGrid() {
        const grid = [];
        for(let i = 0, n = this._x; i < n; i++) {
            const row = [];
            grid.push(row);
            for(let j = 0, m = this._y; j < m; j++) {
                row.push([]);
            }
        }
        return grid;
    }
    _checkCoordinates(coords) {
        if(!(coords instanceof Coords)) {
            throw new Error(`${coords} is not of type Coords`);
        } else {
            return true;
        }
    }
    get(coords) {
        this._checkCoordinates(coords);
        return this._grid[coords.x][coords.y];
    }
    insertElement(element) {
        this._checkCoordinates(element.center);
        this._elements.set(element.id, element);
    }
}
