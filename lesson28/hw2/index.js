function fibonacci(num) {
    if (num < 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
export const maxFibonacci = num => {
    let fib = 0;
    let index = 0; 
    while (true) {
        const nextFib = fibonacci(index);
        if (nextFib > num) break;
        fib = nextFib;
        index += 1;
    }
    return fib;
};