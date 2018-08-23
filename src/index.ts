import {Game} from './Game/Game'

//creating game
let game:Game = new Game()
console.clear()
//loop for game
while (true){
    game.initGame()
    game.game()
}
