function reverseArray(arr){
    if(!Array.isArray(arr)) return null;
    let arr2 = arr;
    let arr3 = [arr.length];
    for(let i = arr.length; i > 0; i--){
        arr3[i] = arr2[arr2.length - i];
    
    }
    arr3.shift();
    return arr3;
}

