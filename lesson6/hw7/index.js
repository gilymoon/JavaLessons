function checker(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(max>arr[i]){
            max = arr[i];
        }
        
    }
    for(let i = 0; i < arr.length; i++){
        if(min<arr[i]){
            min = arr[i];
        }
        
    }
    let sum = max + min;
    if(sum > 1000){
        return true;
    }
    else{
        return false;
    }
}