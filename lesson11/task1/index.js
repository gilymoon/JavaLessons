 function splitText(str, len){
     const strArr = [];
     let startPosition = 0;
    if (!str) return null;
     while(true){
        let chunk = text.substr(startPosition, len);
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