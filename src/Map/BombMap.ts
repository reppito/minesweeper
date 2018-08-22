import {Map} from './Map'

export class BombMap extends Map{

    constructor (NumBombs:number = 2) {
        super(NumBombs, 2)
    }
}