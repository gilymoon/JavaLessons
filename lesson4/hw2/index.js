let m = 1;
let n = 20;
let i = m;

let result = 0;

while(i <= n){
    if((i % 2 === 0) && (i % 4 !== 0)){
        result += i;
    }
    else if(i % 3 === 0){
        result -= i;
    }
    else if(i % 4 === 0){
        result *= i;
    }
    if(i % 5 === 0){
        console.log(i);
    }
    i++;
}