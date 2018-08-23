import {Map} from './Map'

export class BombMap extends Map{

    private numBombs:number

    constructor(height:number = 2, width:number = 2, bombs:number =1){
        super(height,width)
        this.numBombs = bombs
        this.initBombMap()
    }

    initBombMap () {

        //cardinal coordinates
        let x:number 
        let y:number

        //select in 'blank spaces' put bombs
        for (let i = 0; i < this.numBombs; ) {
            x = Math.floor(Math.random() * this.map[0].length)
            y = Math.floor(Math.random() * this.map.length)
            if(this.map[y][x] === '.'){
                this.map[y][x] = 'bomb'
                i++
            }
        }
    }

    findBomb (x:number, y:number):boolean {

        if(this.map[y][x] !== '.'){
            return true
        }
        return false
    }
}