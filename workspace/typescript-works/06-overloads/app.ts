// ahead of time, union data type 

function totalLength1 (x:string, y : string ): number 
function totalLength1 (x:any[], y : any[] ): number 
function totalLength1 (x:(any [] | string), y : (string | any []) ): number {
    let total = x.length + y.length;

    // type gaurd 
    if(x instanceof Array) {
        x.push("New Content"); 
    }

    if(x instanceof String) {
        x.substr(0,2); 
    }

    return total; 
}

totalLength1("Hello", "hi")



