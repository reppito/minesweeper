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
        //select in 'blank spaces' put bombs
        for (let i = 0; i < this.numBombs;) {
            x = Math.floor(Math.random() * this.map[0].length);
            y = Math.floor(Math.random() * this.map.length);
            if (this.map[y][x] === '.') {
                this.map[y][x] = '*';
                i++;
            }
        }
    }
    findBomb(y, x) {
        if (this.map[y][x] !== '.') {
            return true;
        }
        return false;
    }
    adjacentBombs(y, x) {
        let cont = 0;
        for (let i = y - 1; i <= y + 1; i++) {
            if (i >= 0 && i < this.map.length) {
                for (let j = x - 1; j <= x + 1; j++) {
                    if (j >= 0 && j < this.map[i].length) {
                        if (this.map[i][j] === '*') {
                            cont++;
                        }
                    }
                }
            }
        }
        return cont;
    }
}
exports.BombMap = BombMap;
//# sourceMappingURL=BombMap.js.map