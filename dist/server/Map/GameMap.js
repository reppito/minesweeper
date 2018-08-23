"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Map_1 = require("./Map");
class GameMap extends Map_1.Map {
    constructor(height = 2, width = 2) {
        super(height, width);
    }
    drawMap(y, x, input) {
        ``;
        this.map[y][x] = input;
    }
    getposition(y, x) {
        return this.map[y][x];
    }
}
exports.GameMap = GameMap;
//# sourceMappingURL=GameMap.js.map