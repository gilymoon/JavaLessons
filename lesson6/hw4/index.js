function isIncluded(arr, num){
    let isIncl = false;
    for(let i = 0; i < arr.length; i++){
        if(num === arr[i]){
            isIncl = true;
        }
    }
    if(isIncl){
        return true;
    }
}

function uniqueCount(array){
    let count = 0;
    
    for(let i = 0; i < array.length; i++){
        if(isIncluded(array, array[i])){
            count++;
        }
        
    }
    return count;
}

let arr = [66, 2, 66, 3, 1];
console.log(uniqueCount(arr));

