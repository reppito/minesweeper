"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rl = require("readline-sync");
const utils = require("../utilites/utils");
const GameMap_1 = require("../Map/GameMap");
class Game {
    //constructor
    constructor() {
        this.Height = 0;
        this.Width = 0;
        this.bombs = 0;
    }
    //intialize game
    initGame() {
        let flag = true;
        do {
            //initial params
            let input = rl.question('please introduce initial params width height width and number of bombs. Ej: 40 30 7  ');
            console.clear();
            //separate params for initialize game
            let params = input.split(' ');
            //verify params
            if (params.length !== 3 || utils.verifyNaN(params)) {
                flag = true;
                console.log("you introduced an invalid format, please try again");
            }
            else if (parseInt(params[0]) * parseInt(params[1]) < parseInt(params[2])) {
                console.log('invalid numbers of bombs,please try again');
            }
            else {
                this.Height = parseInt(params[0]);
                this.Width = parseInt(params[1]);
                this.bombs = parseInt(params[2]);
                let map = new GameMap_1.GameMap(this.Height, this.Width);
                console.log(map.toString());
                flag = false;
            }
        } while (flag);
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map