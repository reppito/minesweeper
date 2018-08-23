import {Game} from './Game/Game'
import * as rl from 'readline-sync'
//creating game
let game:Game = new Game()
console.clear()


while (true) {
    game.initGame()
    game.game()
    game.finish()

    rl.question('put any key to play again or ctrl+c to exit :)')
}
