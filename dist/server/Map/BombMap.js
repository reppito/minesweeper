"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Map_1 = require("./Map");
class BombMap extends Map_1.Map {
    constructor(height = 2, width = 2, bombs = 1) {
        super(height, width);
        this.numBombs = bombs;
        this.initBombMap();
    }
    initBombMap() {
        //cardinal coordinates
        let x;
        let y;
        for (let i = 0; i < this.numBombs - 1;) {
            x = Math.floor(Math.random() * this.map[0].length);
            y = Math.floor(Math.random() * this.map.length);
            if (this.map[y][x] === '.') {
                this.map[y][x] = 'bomb';
                i++;
            }
        }
    }
    findBomb(x, y) {
        if (this.map[y][x] !== '.') {
            return true;
        }
        return false;
    }
}
exports.BombMap = BombMap;
//# sourceMappingURL=BombMap.js.map