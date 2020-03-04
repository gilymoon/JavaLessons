function reverseArray(arr){
    if(!Array.isArray(arr)) return null;
    let arr2 = arr;
    let arr3 = [];
    for(let i = 0; i < arr.length; i++){
        arr3[i] = arr2.pop();
    }
    return arr3;
}

let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(reverseArray(arr));