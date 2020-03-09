function splitString(str, len){
    if(len === undefined){
        len = 10;
    }
    const strArr = [];
       let startPosition = 0;
      if (str === !(String)) return null;
       while(true){
          let chunk = str.substr(startPosition, len);
          if(chunk.length === 0) break;
          if (chunk.length < len) {
           chunk = chunk + '.'.repeat(len - chunk.length);
           
       }
           
              strArr.push(chunk.slice(0));
              startPosition += len;
          
          
       }
       return strArr;
   
}
let str = 'abcd efgh hagsd';
console.log(splitString(str, ));

// 1. [abcd efgh] => ['abcd', ' efg', 'h...'];