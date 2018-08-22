"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rl = require("readline-sync");
function initgame() {
    let flag = true;
    do {
        //initial params
        let input = rl.question('please introduce initial params width height width and number of bombs. Ej: 40 30 7  ');
        let params = input.split(' ');
        console.clear();
    } while (flag);
}
console.clear();
initgame();
//# sourceMappingURL=index.js.map