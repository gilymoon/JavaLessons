function uniqueCount(array) {
    let uniqArray = [];
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        let uniq = false;
        for (let j = 0; j < uniqArray.length; j++) {
            if (array[i] === uniqArray[j]) {
                uniq = true;
            }
        }
        if (uniq == false) {
            uniqArray.push(array[i]);
            count++;
        }
    }
    console.log(uniqArray, count);

    return count;
}
let arr = [66, 2, 66, 3, 1];
console.log(uniqueCount(arr));

