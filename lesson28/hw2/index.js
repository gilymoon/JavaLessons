

function maxFibonacci(num){
    if(num < 0) return;
    let a = 1;
    let b = 1;
    while(true){
        let tmp = a + b;
        if( tmp > num){
            return b;
        }
        a = b;
        b = tmp;
    }


}

export{maxFibonacci}