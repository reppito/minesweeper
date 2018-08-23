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
    
    findVictory (numbBombs:number):boolean {
        let cont:number = 0

        for (let i = 0; i < this.map.length; i++) {
            for (let j = 0; j < this.map[0].length; j++) {
                if (this.map[i][j] == '.'){
                    return false
                }else if(this.map[i][j] == 'P' ){
                    cont++
                }
            }
            
        }

        return (numbBombs - cont == 0) ? true : false
    }
}
