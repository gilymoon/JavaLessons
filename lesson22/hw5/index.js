const btn = document.querySelector('.single-use-btn');

function msgClicked(){
    btn.removeEventListener('click', msgClicked);
    console.log('clicked');

}

btn.addEventListener('click', msgClicked)