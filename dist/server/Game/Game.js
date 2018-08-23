"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rl = require("readline-sync");
const utils = require("../utilites/utils");
const GameMap_1 = require("../Map/GameMap");
const BombMap_1 = require("../Map/BombMap");
class Game {
    //constructor
    constructor() {
        this.Height = 0;
        this.Width = 0;
        this.bombs = 0;
        this.gameMap = new GameMap_1.GameMap();
        this.bombMap = new BombMap_1.BombMap();
    }
    //intialize maps
    initMaps() {
        this.gameMap = new GameMap_1.GameMap(this.Height, this.Width);
        this.bombMap = new BombMap_1.BombMap(this.Height, this.Width, this.bombs);
        console.log(this.bombMap.toString());
    }
    //intialize game
    initGame() {
        let flag = true;
        do {
            //initial params
            let input = rl.question('please introduce initial params width height width and number of bombs. Ej: 40 30 7  ');
            //separate params for initialize game
            let params = input.split(' ');
            //verify params
            if (params.length !== 3 || utils.verifyNaN(params) === true) {
                flag = true;
                console.log("you introduced an invalid format, please try again");
            }
            else if (parseInt(params[0]) * parseInt(params[1]) < parseInt(params[2])) {
                console.log('invalid numbers of bombs,please try again');
            }
            else if (utils.MinimunSize(params.slice(1, 2), 3) || utils.MinimunSize(params.slice(3, 3), 1)) {
                console.log('minimun size required at least 3x3 and 1 bomb, please try again');
            }
            else {
                this.Height = parseInt(params[0]);
                this.Width = parseInt(params[1]);
                this.bombs = parseInt(params[2]);
                flag = false;
            }
        } while (flag);
        this.initMaps();
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map