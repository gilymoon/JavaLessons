function getRandomNumbers(l, s, f){
    const arr = [l];
    return arr.fill().map(num => Math.round(Math.random() * (s - f + 1) + f))
}