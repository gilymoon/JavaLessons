function sumOfSquares() {
    return [...arguments].reduce((acc,elem) => {
        return acc + (elem*elem)
    }, 0);
}

export { sumOfSquares };