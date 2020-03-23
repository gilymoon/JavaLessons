  
const input = document.querySelector('.text-input');

const textInput = () => {
        console.log(input.value);
    }

input.addEventListener('change', textInput)