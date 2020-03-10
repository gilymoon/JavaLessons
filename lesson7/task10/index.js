function arrAverage(arr){
    if(!Array.isArray(arr)) return null;
    let sum = arr.reduce((a, b) => a + b);
    return sum / arr.length;

}