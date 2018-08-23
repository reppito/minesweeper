"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = require("./Game/Game");
//creating game
let game = new Game_1.Game();
console.clear();
//loop for game
while (true) {
    game.initGame();
    game.game();
}
//# sourceMappingURL=index.js.map