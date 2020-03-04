function uniqueCount(array){
    let count = 0;
    if(array.length<0)break;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j] === array[i]){
                count++;
            }
        }
    }
    return count;
}