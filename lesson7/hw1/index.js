function squareArray(arr){
    if(!Array.isArray(arr)) return null;
    let arr1 = arr;
    return arr1.map(num => num * num);

}