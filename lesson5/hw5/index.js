function findDivCount(a, b, n){
    while(a<=b){
        let count = 0;
        if(a % n === 0){
            count++;
        }
        else{
            return 0;
        }
        a++;
    }
}