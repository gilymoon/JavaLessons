function getRandomNumbers(len, start, finish){
    if (Math.floor(start) >= Math.floor(finish)) return null;
    
    
    return Array(len).fill().map(num => Math.round(Math.random() * (start - finish + 1) + finish))
}

console.log(getRandomNumbers(10, -0.1, 0.1));