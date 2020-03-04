function squareArray(arr){
    if(!Array.isArray(arr)) return null;
    let arr2 = arr;
    let arr3 = [arr.length];
    for(let i = 0; i < arr.length; i++){
        arr3[i] = arr2[i] * arr2[i]; 
    }
    return arr3;
}
