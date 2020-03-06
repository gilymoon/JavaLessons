function multiRound(num){
    let arr = [Math.floor(num), 
    Math.round(num), Math.ceil(num), 
Math.trunc(num), num.toFixed(2)];
return arr;
}