import {Map} from './Map'

export class GameMap extends Map{

    constructor(height:number = 2, width:number = 2){
        super(height,width)
    }

    drawMap (y:number, x:number, input:string):void {
        ``
        this.map[y][x] = input
    }
    
    getposition (y:number, x:number):string {
        return this.map[y][x]
    }
}
