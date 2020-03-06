function getMaxAbsoluteNumber(arr){
    const absoluteValues = arr;
    if(!Array.isArray(arr)) return null;
    const max = Math.max(...absoluteValues);
    return max;
}