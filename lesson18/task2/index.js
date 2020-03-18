const wallet = {
    transactions: [3, 2, 44, -1, 333],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min(...this.transactions);
    }
};

export { wallet };