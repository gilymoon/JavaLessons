function superRound(num, acc){
    let arr = [Math.floor(num * acc)/acc, 
        Math.round(num * acc)/acc, Math.ceil(num*acc)/acc, 
    Math.trunc(num*acc)/acc, +num.toFixed(2)];
    return arr;
}