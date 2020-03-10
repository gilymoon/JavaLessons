function cleanTransactionsList(arr){
    let numArr = arr.filter(item => {
        if (typeof(+item) === 'number' && !isNaN(item)) {
            return item;
        }
    })
    return numArr.map(item => {
        return '$' + (+item).toFixed(2)
    });
}