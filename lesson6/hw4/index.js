function uniqueCount(array){
    let count = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j] === array[i]){
                count++;
            }
        }
    }
    return count;
}