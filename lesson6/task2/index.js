function getSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(!Array.isArray(arr)) return null;
        sum += arr[i];
    }
    return sum;
}