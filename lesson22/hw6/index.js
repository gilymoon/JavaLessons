const allBtns = document.querySelectorAll('.btn')

function handleClick(event){
   console.log(event.target.textContent) ;
}

allBtns[0].addEventListener('click', handleClick);
allBtns[1].addEventListener('click', handleClick);
