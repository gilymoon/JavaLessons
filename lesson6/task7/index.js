function increaseEvenEl(arr, delta){
    let arr1 = arr;
    if(!Array.isArray(arr)) return null;
    for(let i = 0; i < arr.length; i++){
        if(arr1[i]%2===0){
            arr1[i] += delta;
        }
    }
    return arr1;
}