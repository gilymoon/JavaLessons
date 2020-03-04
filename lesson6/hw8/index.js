function cloneArr(arr){
    let arr1 = [];
    let i = 0;
    while(i < arr.length){
        arr1[i] = arr[i];
        i++;
    }

    return arr1;
}