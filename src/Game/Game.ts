import * as rl from 'readline-sync'
import * as utils from '../utilites/utils'
import {GameMap} from '../Map/GameMap'
import {BombMap} from '../Map/BombMap'

export class Game {

    private Height:number
    private Width:number
    private bombs: number
    private gameMap:GameMap
    private bombMap: BombMap
    //constructor
    constructor(){
        this.Height = 0
        this.Width = 0
        this.bombs =  0
        this.gameMap = new GameMap()
        this.bombMap = new BombMap()

    }

    //intialize game
    initGame() {
        let flag:boolean = true
        do{
            //initial params
            let input = rl.question('please introduce initial params width height width and number of bombs. Ej: 40 30 7  ')
    
            console.clear()
    
            //separate params for initialize game
            let params:Array<string> = input.split(' ')
    
            //verify params
            if (params.length !== 3 || utils.verifyNaN(params)){
    
                flag = true
                console.log("you introduced an invalid format, please try again")
    
            } else if (parseInt(params[0]) * parseInt(params[1]) < parseInt(params[2])){
    
                console.log('invalid numbers of bombs,please try again')
            } else {
                this.Height = parseInt(params[0])
                this.Width = parseInt(params[1])
                this.bombs = parseInt(params[2])
                let map = new GameMap(this.Height, this.Width)
                flag = false
            }
    
        } while(flag)
    }
}