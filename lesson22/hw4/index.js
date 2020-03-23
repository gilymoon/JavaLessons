const btn = document.querySelector('.search__btn');
const input = document.querySelector('.search__input');

function search(){
    console.log(input.value);
}

btn.addEventListener('click', search);