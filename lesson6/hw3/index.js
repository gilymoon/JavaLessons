function sortAsc(array){
    let i = 0;
    let goodPairsCounter = 0;
        while (true) {
            if (array[i] > array[i + 1]) {
                let q = array[i];
                array[i] = array[i + 1];
                array[i + 1] = q;
                goodPairsCounter = 0;
            } else {
                goodPairsCounter++;
            }
            i++;
            if (i == array.length - 1) {
                i = 0;
            }
            if (goodPairsCounter == array.length - 1) break;
        }
        return array;
}

function sortDesc(array){
    let i = 0;
    let goodPairsCounter = 0;
        while (true) {
            if (array[i] < array[i + 1]) {
                let q = array[i];
                array[i] = array[i + 1];
                array[i + 1] = q;
                goodPairsCounter = 0;
            } else {
                goodPairsCounter++;
            }
            i++;
            if (i == array.length - 1) {
                i = 0;
            }
            if (goodPairsCounter == array.length - 1) break;
        }
        return array;
}

let arr = [3, 2, 1, 4, 5];
console.log(sortDesc(arr));