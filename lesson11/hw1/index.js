function splitString(str, len){
     const strArr = [];
        let startPosition = 0;
       if (str === !(String)) return null;
        while(true){
           let chunk = str.substr(startPosition, len);
           if(chunk.length === 0) break;
           if (chunk.length < len) {
            chunk = chunk + '.'.repeat(len - chunk.length);
            
        }
           if (len === undefined) {
               strArr.push(chunk.slice(0));
               startPosition += 10;
           } else {
               strArr.push(chunk.slice(0));
               startPosition += len;
           }
           
        }
        return strArr;
    
}
let str = 'abcd efgh';
console.log(splitString(str, 4));

// 1. [abcd efgh] => ['abcd', ' efg', 'h...'];