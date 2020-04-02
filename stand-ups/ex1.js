const dayTransactions = [
    { currency: 'USD', amount:60, operation: 'sell' },
    { currency: 'EUR', amount:160, operation: 'buy' },
    { currency: 'EUR', amount:90, operation: 'sell' },
];

function getTotalBalance(transactionsList) {
    const transformedTransactions = transactionsList.map(function(transactionObj) {
        const key = transactionObj.currency;
        const value = transactionObj.amount;

        const obj = {
            [key]: transactionObj.operation === 'sell' ? -value : value
        };
        return obj;
    });

    const result = transformedTransactions.reduce(function(acc, transactionObj) {
        
        const value2 = acc.value + transactionObj.value;
        if(Object.keys(acc).length === 0){
            const obj = {
                [transactionObj.key]:  transactionObj.value};
            return obj;
        }
        
        
        const obj = {[acc.key]: acc.key === transactionObj.key ? value2 : acc.value};
        return obj;
    },{});
    return result;
}

const result = getTotalBalance(dayTransactions);

console.log(result);