const pages = document.querySelectorAll('.paginatioin__page');

function handleClick(event){
    console.log(event.target.dataset.pageNumber);
}

pages.forEach(page => {
    page.addEventListener('click', handleClick);
});