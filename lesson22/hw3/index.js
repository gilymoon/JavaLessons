const checkbox = document.querySelector('.task-status');

function check(){
    console.log(checkbox.value);
}

checkbox.addEventListener('change', check);