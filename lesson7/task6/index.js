function cloneArr(arr){
    if(!Array.isArray(arr)) return null;
    let arr1 = arr.slice();
    return arr1;
}