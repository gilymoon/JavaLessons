function countOccurrences(str, searchStr){
    if(searchStr === '') return null;
    return str.split(searchStr).length-1;
    
    
     
}


let str = 'str strstr 3 times';
let searchStr2 = 'str';
console.log(str.length);
console.log(countOccurrences(str, searchStr2));