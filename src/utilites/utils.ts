//verify if all strings elements in an string array are valid numbers
export function verifyNaN(param:any):boolean{

    param.forEach( (number:string) => {
        if (isNaN(parseInt( number))) 
            return true
    })

    return false
}

