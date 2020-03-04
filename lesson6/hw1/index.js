function squareArray(arr){
    if(!Array.isArray(arr)) return null;
    let arr2 = arr;
    for(let i = 0; i < arr.length; i++){
        arr2[i] = arr[i] * arr[i]; 
    }
    return arr2;
}
