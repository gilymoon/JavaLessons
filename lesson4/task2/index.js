let m = 5;
let n = 20;
let i = m;
let result = 1;


do{
    if(i%2===1)
    result *= i;
    i++;
}while(i <= n)

console.log('Result: ', result);