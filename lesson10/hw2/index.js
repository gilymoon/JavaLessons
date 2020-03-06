function getRandomNumbers(l, s, f){
    if (Math.floor(s) >= Math.floor(f)) return null;
    let arr = [l];
    return arr.fill().map(num => Math.round(Math.random() * (s - f) + f))
}