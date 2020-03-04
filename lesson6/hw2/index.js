function reverseArray(arr){
    if(!Array.isArray(arr)) return null;
    let arr2 = arr;
    let arr3 = [];
    for(let i = 0; i < arr.length; i++){
        arr3[i] = arr2.length-i;
    
    }
    return arr3;
}

