function squaredNumbers(){
    const numbers = document.querySelectorAll('.number');
    
    for (let num of numbers) {
        const numInSquare = num.getAttribute('data-number') * num.getAttribute('data-number');
        num.dataset.squaredNumber = numInSquare;
    }

}

export{squaredNumbers}