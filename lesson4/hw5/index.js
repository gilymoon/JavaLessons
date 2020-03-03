let i = 1;
let sum = 0;

let div = 0;
let rest = 0;



while(i <= 1000){
    sum += i;
}

div = sum / 1234;
rest = sum % 1234;

div > rest ? console.log(true) : console.log(false);