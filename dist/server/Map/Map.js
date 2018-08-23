"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Map {
    constructor(height, width) {
        this.map = [];
        this.initMap(height, width);
    }
    getmap() {
        return this.map;
    }
    //initialize game map with selected HxW
    initMap(height, width) {
        for (let i = 0; i < height; i++) {
            //new array each file
            this.map.push(new Array());
            for (let j = 0; j < width; j++) {
                this.map[i].push('.');
            }
        }
    }
    //show string map
    toString() {
        let array = '';
        this.map.forEach((row) => {
            row.forEach((element) => {
                array += element;
            });
            array += '\n';
        });
        return array;
    }
}
exports.Map = Map;
//# sourceMappingURL=Map.js.map