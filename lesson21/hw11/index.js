function squaredNumbers(){
    const list = document.querySelector('.list');
    const arrList = Array.from(list);
    const squaredArr = arrList.map(el => el.getAttribute('data-number')*el.getAttribute('data-number'));
    const num = document.querySelector('.number');
    for(let i = 0; i < arrList.length; i++){
        arrList[i].num.dataset.squaredNumber = squaredArr[i];
    }

}


// создать массив элементов списка
// считать у каждого значение атребута дата
// перемножить значения на себя
// вернуть массив с перемноженными значениями
// создать класс дата(^2)
// присвоить новый класс каждому элементу списка
// с ^2 значениями 

export{squaredNumbers}