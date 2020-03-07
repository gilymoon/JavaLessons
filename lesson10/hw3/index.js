function superRound(num, acc){
    let coma = Math.pow(10, acc);
    let arr = [Math.floor(num * coma)/coma, 
        Math.round(num * coma) / coma, 
        Math.ceil(num * coma) / coma, 
    Math.trunc(num * coma) / coma, 
    +num.toFixed(coma)];
    return arr;
}