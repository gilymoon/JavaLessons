function increaseEvenEl(arr, delta){
    if(!Array.isArray(arr)) return null;
    let arr1 = arr;
    return arr1.map(el => {if(el%2===0){
        el+=delta;
    }});
}