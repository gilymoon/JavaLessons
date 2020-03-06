function getMaxAbsoluteNumber(arr){
    const absoluteValues = arr;
    if(!Array.isEmpty(arr)) return null;
    const max = Math.max(...absoluteValues);
    return max;
}