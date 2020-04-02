const mult = a => b => {
    return a * b;
}

const twice = a =>{
    return mult(a)(2);
}

const triple = a => {
    return mult(a)(3);
}

export{mult, twice, triple}