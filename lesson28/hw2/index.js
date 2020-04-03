function maxFibonacci(num){
    if(num < 0) return;
    if(num < 1) return 1;
    if(!Number.isInteger(num))Math.round(num);
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

console.log(maxFibonacci(0.1));


//export{maxFibonacci}