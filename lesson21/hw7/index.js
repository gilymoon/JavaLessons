function createButton(buttonText){
    const createButt = document.createElement('button');
    document.querySelector('body').append(createButt).innerHTML = buttonText;
}

export {createButton}