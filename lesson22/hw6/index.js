const allBtns = document.querySelectorAll('.btn')

function handleClick(event){
   console.log(event.target.textContent) ;
}

allBtns.forEach(el => {
    el.addEventListener('click', handleClick);
});