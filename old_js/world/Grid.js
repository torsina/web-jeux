import { Coords } from "./Coords.js";

export class Grid {
    constructor(x = 400, y = 400) {
        this._x = x;
        this._y = y;
        this._grid = this._generateGrid();
        this._elements = new Map();
        this._ids = [];
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
    _generateId() {
        let i = 0;
        while(this._ids.contains(i)) {
            i++;
        }
        this._ids.push(i);
        return i;
    }
    _deleteId(id) {
        const index = this._ids.indexOf(id);
        if(index > -1) {
            this._ids.splice(index, 1);
        } else {
            throw new Error(`cannot delete id: ${id}`);
        }
    }
    _isValidId(id) {
        if(!(this._ids.contains(id) && this._elements.has(id))) throw new Error(`invalid id: ${id}`);
        return true;
    }
    _checkCoordinates(coords) {
        if(!(coords instanceof Coords)) {
            return Coords.notInstanceOfCoords(coords);
        } else {
            return true;
        }
    }
    get(coords) {
        this._checkCoordinates(coords);
        return this._grid[coords.x][coords.y];
    }
    insertElement(element) {
        if(this._checkCoordinates(element.center)) {
            element.id = this._generateId();
            this._elements.set(element.id, element);
        }
    }
    deleteElement(id) {
        if(this._isValidId(id)) {
            this._deleteId(id);
            this._elements.delete(id);
        }
    }
}
