const checkbox = document.querySelector('.task-status');

function check(){
    console.log(checkbox.checked);
}

checkbox.addEventListener('change', check);