function getRandomNumbers(l, s, f){
    if (Math.floor(s) >= Math.floor(f)) return null;
    Math.abs(l);
    Math.ceil(l);
    let arr = [l];
    return arr.fill().map(num => Math.round(Math.random() * (s - f) + f))
}

console.log(getRandomNumbers(-0.1,0.1,10));