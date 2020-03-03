function getPrimes(a){
    let i = 0;
    while(i<=a){

        if(a>1){
            if(a % 1 === 0 && a % a === 0){
                console.log(i);   
            }
        }
        i++;
    }
}