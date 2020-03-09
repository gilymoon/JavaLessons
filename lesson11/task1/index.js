 function splitText(str, len){
     const strArr = [];
     let startPosition = 0;
    if (str === !(String)) return null;
     while(true){
        let chunk = str.substr(startPosition, len);
        if(chunk.length === 0) break;
        if (len === undefined) {
            strArr.push((chunk[0].toUpperCase()) + chunk.slice(1));
            startPosition += 10;
        } else {
            strArr.push((chunk[0].toUpperCase()) + chunk.slice(1));
            startPosition += len;
        }

     }
     return strArr.join('\n');
 }