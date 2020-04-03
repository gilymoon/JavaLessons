function sum(num){
    if (num < 1) {
        return num;
    }
    return num+ sum(num-1);
}

export {sum}