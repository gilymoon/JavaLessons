function swap(arr){
    let arr2 = arr;
   const [start, ...rest] = arr2;
    
    
    return [...rest, start];
}

