function createButton(buttonText){
    const createButt = document.createElement('button').contentText(`${buttonText}`);
    document.querySelector('body').append(createButt);
}

export {createButton}