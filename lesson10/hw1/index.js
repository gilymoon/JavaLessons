function getTotalPrice(arr){
    const sum = arr.reduce((cur, next) => cur + next);
    return '$' + Math.floor(sum*100)/100;

}