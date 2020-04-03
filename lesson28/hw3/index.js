function sum(num){
    return num+ sum(num-1);
}

export {sum}