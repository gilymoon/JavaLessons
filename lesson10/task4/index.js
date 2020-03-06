function getMaxAbsoluteNumber(arr){
    const absoluteValues = arr;
    if(!Array.isArray(arr)||arr.length()===0) return null;
    const max = Math.max(...absoluteValues);
    return max;
}