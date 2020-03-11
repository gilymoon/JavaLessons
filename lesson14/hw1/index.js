let res = 0;

const add = (num) => {
    res += num;
};

const decrease = (num2) => {
    res -= num2;
};

const reset = () => {
    res = 0;
};

const getMemo = () => {
    return res;
};

export { add, decrease, reset, getMemo }