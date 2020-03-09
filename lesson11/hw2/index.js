function countOccurrences(str, searchStr){
    if(searchStr === '') return null;
    return str.search(/searchStr/g).length();
     
}