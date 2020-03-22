function createButton(buttonText){
    const createButt = document.createElement('button');
    document.querySelector('body').append(createButt).contentText = buttonText;
}

export {createButton}