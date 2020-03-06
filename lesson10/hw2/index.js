function getRandomNumbers(l, s, f){
    if (Math.floor(s) >= Math.floor(f)) return null;
    const arr = [l];
    return arr.fill().map(num => Math.round(Math.random() * (s - f + 1) + f))
}