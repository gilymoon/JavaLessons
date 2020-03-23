const allBtns = document.querySelectorAll('.btn')

function handleClick(event){
   console.log(event.target.textContent) ;
}

allBtns.addEventListener('click', handleClick(allBtns[0]));
allBtns.addEventListener('click', handleClick(allBtns[1]));
