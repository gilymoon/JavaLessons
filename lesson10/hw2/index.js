function getRandomNumbers(len, start, finish){
    if (Math.floor(start) >= Math.floor(finish)) return null;
    Math.abs(len);
    Math.ceil(len);
    let arr = [len];
    return arr.fill().map(num => Math.round(Math.random() * (start - finish) + finish))
}

console.log(getRandomNumbers(-0.1,0.1,10));