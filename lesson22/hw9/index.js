const pages = document.querySelectorAll('.paginatioin__page');

function handleClick(event){
    console.log(event.target.getAttribute('data-page-number'))
}

pages.forEach(page => {
    page.addEventListener('click', handleClick);
});