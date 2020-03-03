function findDivCount(a, b, n){
    let count = 0;
    let i = a;
    while(i<=b){
        
        if(i % n === 0){
            ++count;
        }
        
        i++;
    }
    if(count === 0) return 0;
    return count;
}

let test = findDivCount(1, 20, 5);
console.log(test);