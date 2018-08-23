"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = require("./Game/Game");
const rl = require("readline-sync");
//creating game
let game = new Game_1.Game();
console.clear();
//loop for game
while (true) {
    game.initGame();
    game.game();
    rl.question('perdiste');
}
//# sourceMappingURL=index.js.map