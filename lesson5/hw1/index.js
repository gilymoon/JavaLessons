function getSum(a, b){
    let sum = 0;
    while(a<=b){
        if(a % 2 === 0){

            sum+=a;
            
        }
        a++;
    }
    return sum;
}