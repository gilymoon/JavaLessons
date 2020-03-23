const btn = document.querySelector('.create-btn');

function alertFunc(){
    alert('done');
}

const alertFunc = alertFunc;
btn.addEventListener('click', alertFunc);