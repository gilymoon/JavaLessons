const getSum = numbers => {
    numbers
    .filter(value => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);
}

const asyncSum = (...asyncNumbers) => {
    return Promise.all(asyncNumbers) 
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error('Can\'t calculate')))
}

export {asyncSum}