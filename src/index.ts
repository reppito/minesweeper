import {Game} from './Game/Game'
import * as rl from 'readline-sync'

function initgame() {
    let flag:boolean = true
    do{
        //initial params
        let input = rl.question('please introduce initial params width height width and number of bombs. Ej: 40 30 7  ')

        //separate and verify params
        let params:Array<string> = input.split(' ')
        if(params.length < 3)

    }while(flag)
}


//startin code
console.clear()
initgame()