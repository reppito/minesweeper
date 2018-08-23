//verify if all strings elements in an string array are valid numbers
export function verifyNaN(param:any):boolean{

    for (let i = 0; i < param.length; i++) {

        if(isNaN(parseInt(param[i]))){
            return true
        }   
    }
    return false
}
//verify if numbers in a string array are less than the minimun required
export function MinimunSize(param:any, minimun:Number):boolean {

    for (let i = 0; i < param.length; i++) {

        if( parseInt(param[i]) < minimun){
            return true
        }   
    }
    return false
}

//verify if numbers in a string array are less than the minimun required
export function MaximunSize(param:any, maximun:Number):boolean {
    for (let i = 0; i < param.length; i++) {
        if( parseInt(param[i]) > maximun){
            return true
        }   
    }
    return false
}