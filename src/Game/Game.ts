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
    private statusGame:boolean
    private victory:boolean
    //constructor
    constructor(){
        this.Height = 0
        this.Width = 0
        this.bombs =  0
        this.gameMap = new GameMap()
        this.bombMap = new BombMap()
        this.victory = false
        this.statusGame = true

    }
    //InputUser

    inputUser ():string[]{
        let flag:boolean = false
        let input:string
        let params:string []
        do{
            console.log(this.gameMap.toString())
            console.log(this.bombMap.toString())
            input = rl.question('type your position (Ej. 30 40) and what dou you want to do (Ej. U uncover M mark )\n')
            console.clear()
            params = input.split(' ')

            if (params.length !== 3 || utils.verifyNaN(params.slice(0,2)) === true ||  params[2].toLowerCase() !== 'm' && params[2].toLowerCase() !== 'u'){

                flag = true
                console.log("you introduced an invalid format, please try again")

            } else if (parseInt(params[0]) <= 0 || parseInt(params[0]) > this.Height ||parseInt(params[1]) <= 0 || parseInt(params[1]) > this.Width ){
                
                flag = true
                console.log('invalid coordinate, please try again')
            } else {
                return params
                flag = false
            }
    
        } while (flag)
        return params
    }
    //intialize maps
    initMaps ():void {
        
        this.gameMap = new GameMap(this.Height, this.Width)
        this.bombMap = new BombMap(this.Height, this.Width, this.bombs)
        
    }

    //since a position without adjacent bombs explode
    explode (y:number, x:number){

        //mark position as disable and visited
        this.gameMap.drawMap(y,x, '-')

        //looking for adjacent positions
        for (let i = y-1; i <= y+1; i++) {
            if(i>=0 && i <this.Height){
                for (let j = x-1; j <= x+1; j++) {
                    if(j>=0 && j <this.Width){

                        if(this.gameMap.getposition(i, j)== '.' || this.gameMap.getposition(i, j)== 'P'){

                            let adjacentBombs = this.bombMap.adjacentBombs(y,x)

                            if (adjacentBombs == 0){
                                this.explode (i,j)

                            } else {
                                this.gameMap.drawMap(y,x, adjacentBombs.toString())
                            }
                     
                        }
                    }
                }
            }

        }
    }
    //intialize game
    initGame() {
        let flag:boolean = true
        this.victory = false
        this.statusGame = true
        do{
            //initial params
            let input = rl.question('please introduce initial params height, width and number of bombs. Ej: 40 30 7  \n')


            //separate params for initialize game
            let params:Array<string> = input.split(' ')
            //verify params
            if (params.length !== 3 || utils.verifyNaN(params) === true){

                flag = true
                console.log("you introduced an invalid format, please try again")

            } else if (parseInt(params[0]) * parseInt(params[1]) < parseInt(params[2])){

                console.log('invalid numbers of bombs,please try again')

            } else if (utils.MinimunSize(params.slice(0,2),3) || utils.MinimunSize(params.slice(-1),1)) {
                
                console.log('minimun size required at least 3x3 and 1 bomb, please try again')

            }else if (utils.MaximunSize(params.slice(0,2),40)) {
                console.log('you cant create a map maxium of 40 * 40 positions and height * width number of bombs, try again')

            } else {
                this.Height = parseInt(params[0])
                this.Width = parseInt(params[1])
                this.bombs = parseInt(params[2])
                flag = false
            }
    
        } while(flag)

        this.initMaps()
    }

    // gameplay

    game ():void{
        let input:string []
        while(this.statusGame){

            input = this.inputUser()
            //cardinal coordinates
            let y:number = parseInt(input[0])
            let x:number = parseInt(input[1])
            //cases`    
            if (input[input.length-1].toLocaleLowerCase() == 'u' && this.bombMap.findBomb(y-1,x-1)){
                this.statusGame = false
                this.victory = false
            } else if (input[input.length-1].toLocaleLowerCase() == 'u'){

                let adjacentBombs = this.bombMap.adjacentBombs(y-1, x-1)

                if(adjacentBombs != 0){
                    this.gameMap.drawMap(y-1, x-1, adjacentBombs.toString())
                } else {
                    this.explode(y-1,x-1)

                }
            } else {

            }
        }
    }

}