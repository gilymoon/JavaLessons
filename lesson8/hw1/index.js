function pickProps(obj, arr){
    const newObj = {};
    for (let i of arr) {
        for (let key in obj) {
            if (i === key) {
                newObj[key] = obj[key]
            }
        }
    }
    

    return newObj;
}