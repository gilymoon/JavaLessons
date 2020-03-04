function swap(arr){
    let arr2 = arr;
    [start, ...rest] = arr2;
    
    
    return [...rest, start];
}
