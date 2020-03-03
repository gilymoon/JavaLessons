let n = 0;
let m = 1000;
let sum = 0;

while(n <= m){
    if(n % 2 === 1){
        console.log('Found');
        sum += n;
        if(sum * 5 > 5000){
            console.log('Bigger');
        }
        else if(sum * 5 === 5000){
            console.log('equal');
        }
        else{
            console.log('Smaller');
        }
    }
    n++;
}