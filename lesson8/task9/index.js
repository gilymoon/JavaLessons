function compareObjects(onj1, obj2){
    const objKeys1 = Object.keys(obj1);
    const objKeys2 = Object.keys(obj2);

    if(objKeys1.length !== objKeys2.length){
        return false;
    }

    for(let key of objKeys2){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}