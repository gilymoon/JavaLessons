function removeDuplicates (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let uniq = false;
        for (let j = 0; j < newArray.length; j++) {
            if (newArray[j] === array[i]) {
                uniq = true;
            }
        }
        if (uniq == false) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let arr = [1, 2, 3, 2, 4];
console.log(removeDuplicates(arr));