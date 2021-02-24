// even if you have typo instead of length to lenth it will still work 
// since the data type is any 
function totalLength (x:any [], y : string ): number {
    let total = x.length + y.length;
    return total; 
}

let retVal: number = totalLength( [12,3,4,4], "hello"); 
console.log(retVal);

retVal = totalLength( ["hello", "how"], "hello"); 
console.log(retVal);