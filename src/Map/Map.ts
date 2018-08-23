
export class Map{

    map:string [][] 
    constructor(height:number, width:number){
        this.map = []
        this.initMap(height,width)
    }

    getmap () :string [][]{
        return this.map
    }

    //initialize game map with selected HxW
    initMap (height:number,width:number):void {
        for (let i = 0; i < height; i++) {
            //new array each file
            this.map.push(new Array())

            for (let j = 0; j < width; j++) {
                this.map[i].push('.')         
            }  
        }
        
        
    }

    //show string map
    toString ():string {
        let array:string = ''

        this.map.forEach( (row) => {
            row.forEach(  (element) => {
                array += element + ' '
            })
            array+='\n'
        })
        return array
    }
}