const allBtns = document.querySelectorAll('.btn')

function handleClick(event){
   console.log(event.target.textContent) ;
}

btn.addEventListener('click', handleClick(allBtns[0]));
btn.addEventListener('click', handleClick(allBtns[1]));