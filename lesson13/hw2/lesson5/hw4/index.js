function sum(from, to){
    let sum = 0;
    while(from<=to){
        sum+=from;
        from++;
    }
    return sum;
}

function compareSums(a, b, c, d){
    let dist1 = sum(a, b);
    let dist2 = sum(c, d);
    return  dist1 > dist2 ? true : false;
}