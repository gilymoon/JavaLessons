function pickProps(obj, arr){
    const newObj = {};
    for(let key in obj){
        
        for(let i = 0; i < arr.length; i++){
            if(obj[key] === arr[i]){
                newObj[key]=obj[key];
            }
        }
    }
    

    return newObj;
}