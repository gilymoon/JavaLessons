function findDivCount(a, b, n){
    let count = 0;
    while(a<=b){
        
        if(a % n === 0){
            count++;
        }
        else{
            return 0;
        }
        a++;
    }
    return count;
}