function swap(arr){
    [start, ...rest] = arr;
    let arr2 = [...rest, start];
    return arr2;
}