function sortDesc(arr){
    let arr1 = arr;
    arr1.slice().sort((a, b) => b - a);
    return arr1;
}