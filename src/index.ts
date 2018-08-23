import {Game} from './Game/Game'
import * as rl from 'readline-sync'
//creating game
let game:Game = new Game()
console.clear()
//loop for game
while (true){
    game.initGame()
    game.game()
    rl.question('perdiste')
}
